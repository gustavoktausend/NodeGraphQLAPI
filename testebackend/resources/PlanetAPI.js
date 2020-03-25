const { RESTDataSource } = require('apollo-datasource-rest');
const { prisma } = require('../generated/prisma-client');

class PlanetAPI extends RESTDataSource {

    // no node.js versão 12, poderíamos remover esse construtor e fazer apenas:
    // baseURL = 'https://api.arcsecond.io/';
    constructor() {
        super();
        this.baseURL = 'https://api.arcsecond.io/';
    }

    // podemos desestruturar o planet
    // só pra ficar um pouco mais enxuto o código
    async planetReducer({ name, mass }) {
        try {
            // acredito que você quis ver se tem pelo menos uma estação certo?
            // você pode usar o prisma.station, em vez de prisma.stations
            // mas daí precisamos ir lá no datamodel(do prisma)
            // indicar que o planetName é @unique, para conseguirmos buscar unicamente um planeta no DB
            // o que é uma premissa válida
            const haveStationDB = await prisma.station({planetName: name});
            return {
                name,
                mass: mass.value,
                hasStation: !!haveStationDB
            }
        } catch (e) {
            console.error(e)
        }
    }

    exoplanetsRequest(numPages, pageSize) {
        return Array(numPages)
            .fill()
            .map((_, i) => this.get('exoplanets', { page: i + 1, page_size: pageSize }))
    }
    
    // ou por uma abordagem mais imperativa:
    exoplanetsRequestImperative(numPages, pageSize) {
        let pagesPromises = [];
        for (let page=1; i<=numPages; i++)
            pagesPromises.push(this.get('exoplanets', { page, page_size: pageSize }))
        return pagesPromises;
    }

    // o padrão do javascript é camelCase
    async getPlanets(pageSize) {
        try {
            // do jeito que tá, cada await
            // dentro da lista, vai esperar o retorno do this.get
            // pra fazer funcionar, precisa remover o await de dentro,
            // apenas deixando uma lista de promises(não awaitadas), que daí
            // o Promise.all junta elas, e tu espera o conjunto de todas elas,
            // não cada uma individualmente
            const req = await Promise.all([
                this.get('exoplanets',{page:1, page_size: pageSize}),
                this.get('exoplanets',{page:2, page_size: pageSize}),
                this.get('exoplanets',{page:3, page_size: pageSize}),
                this.get('exoplanets',{page:4, page_size: pageSize}),
                this.get('exoplanets',{page:5, page_size: pageSize}),
                this.get('exoplanets',{page:6, page_size: pageSize}),
                this.get('exoplanets',{page:7, page_size: pageSize}),
                this.get('exoplanets',{page:8, page_size: pageSize}),
                this.get('exoplanets',{page:9, page_size: pageSize}),
                this.get('exoplanets',{page:10, page_size: pageSize})
            ]);
            // tem uma certa repetição de código aí em cima, poderíamos criar uma função pra isso!
            const reqImproved = await Promise.all(this.exoplanetsRequest(10, pageSize))

            // esse await é desnecessário, já que
            // req já foi awaitado, e já é uma lista com
            // as responses
            // gostei do .map e .flat aí!
            const results = req.map(value => value.results).flat(1);

            return results
                // eu colocaria essa condição do filter em um outro método
                // já que ele é usado em outro lugar também, pra centralizarmos a lógica
                // ou melhor esse próprio results.filter(X).map(Y) podemos botar em outra função
                // e usar no getSuitablePlanet também!(ver parseResponseList)
                .filter(planet => !!planet.mass && planet.mass.unit === 'M_jup' && planet.mass.value >= 25)
                .map(planet => this.planetReducer(planet));
            // return this.parseResponseList(results)
        } catch (e) {
            console.error(e)
        }
    };

    parseResponseList(responses) {
        const isValidPlanet = planet => !!planet.mass && planet.mass.unit === 'M_jup' && planet.mass.value >= 25
        return responses
            .filter(isValidPlanet)
            .map(planet => this.planetReducer(planet))
    }

    async getSuitablePlanet(planetName) {
        try {
            const planet = await this.get(`exoplanets/${planetName}`);
            return (!!planet.mass && planet.mass.unit === 'M_jup') && planet.mass.value >= 25 ? this.planetReducer(planet) : '';
            // const [ parsedPlanet ] = this.parseResponseList([ planet ])
            // return parsedPlanet;
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = PlanetAPI;