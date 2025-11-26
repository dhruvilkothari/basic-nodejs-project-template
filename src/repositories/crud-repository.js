const {Logger} = require('../config/index');
const AppError = require('../utils/error/app-error');
const { StatusCodes } = require('http-status-codes');
class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
            console.log("This Model", this.model);
            const response = await this.model.create(data);
            return response;
        
    }
    async destroy(data) {
        
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
             if(!response){
                throw new AppError("No record found for the given id",StatusCodes.NOT_FOUND );
            }
            return response;
          
    }

    async get(data) {
        
            const response = await this.model.findByPk(data);
            if(!response){
                throw new AppError("No record found for the given id",StatusCodes.NOT_FOUND );
            }
            return response;
    }

    async getAll(data) {
        
            const response = await this.model.findAll();
            return response;
    }
    
    async update(id, data) {
       
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            if(response[0] == 0){
                throw new AppError("No record found for the given id",StatusCodes.NOT_FOUND );
            }
            return response;    
    }
}
module.exports = CrudRepository;