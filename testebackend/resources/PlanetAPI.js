const { RESTDataSource } = require('apollo-datasource-rest');
const { prisma } = require('../generated/prisma-client');

class PlanetAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.arcsecond.io/';
    }

    async planetReducer(planet) {
        try {
            const haveStationDB = await prisma.stations({where:{planetName: planet.name}});
            return {
                name: planet.name,
                mass: planet.mass.value,
                hasStation: !!haveStationDB.length
            }
        } catch (e) {
            console.error(e)
        }
    }

    async getPlanets(page_size) {
        try {
            const req = await Promise.all([
                await this.get('exoplanets',{page:1, page_size}),
                await this.get('exoplanets',{page:2, page_size}),
                await this.get('exoplanets',{page:3, page_size}),
                await this.get('exoplanets',{page:4, page_size}),
                await this.get('exoplanets',{page:5, page_size}),
                await this.get('exoplanets',{page:6, page_size}),
                await this.get('exoplanets',{page:7, page_size}),
                await this.get('exoplanets',{page:8, page_size}),
                await this.get('exoplanets',{page:9, page_size}),
                await this.get('exoplanets',{page:10, page_size})
            ]);

            const results = await req.map(value => value.results).flat(1);

            return results
                .filter(planet => !!planet.mass && planet.mass.unit === 'M_jup' && planet.mass.value >= 25)
                .map(planet => this.planetReducer(planet));
        } catch (e) {
            console.error(e)
        }
    };

    async getSuitablePlanet(planetName) {
        try {
            const planet = await this.get(`exoplanets/${planetName}`);
            return (!!planet.mass && planet.mass.unit === 'M_jup') && planet.mass.value >= 25 ? this.planetReducer(planet) : '';
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = PlanetAPI;