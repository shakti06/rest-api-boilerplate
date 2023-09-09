import { Request, Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

export class UpdateCategoryController {
    async handle (request : Request, response :  Response){
        const service = new UpdateCategoryService();

        const {id} = request.params;
        const {name, description} = request.body;

        const result = await service.execute({id, name , description});
        
        if(result instanceof Error){
            return response.json(400).send(result.message);
        }


        return response.json(result);
    }
}