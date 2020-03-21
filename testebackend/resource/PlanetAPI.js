const { RESTDataSource } = require('apollo-datasource-rest');

class PlanetAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.arcsecond.io/';
        
    }

    async getPlanets() {
        // page, page_size
        return this.get(`exoplanets/`);
    }
}