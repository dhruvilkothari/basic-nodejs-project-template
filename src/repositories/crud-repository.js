const {Logger} = require('../config/index');
class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            console.log("This Model", this.model);
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository Layer");
            throw error;

        }
        
    }
    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository Layer");
            throw error;

        }   
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository Layer");
            throw error;
        }
    }

    async getAll(data) {
        try {
            const response = await this.model.findAll();
            return response;
        
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository Layer");
            throw error;
        }
    }
    
    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;    
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository Layer");
            throw error;
        }
    }
}
module.exports = CrudRepository;