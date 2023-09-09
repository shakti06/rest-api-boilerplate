import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

export class DeleteCategoryController {
    async handle (request : Request, response :  Response){
        const service = new DeleteCategoryService();

        const {id} = request.params;

        const result : any = await service.execute(id);
        
        if(result instanceof Error){
            throw new Error('id does not exists');
        }

        return response.status(204).end();
    }
}