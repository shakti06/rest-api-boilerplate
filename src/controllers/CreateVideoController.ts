import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";


export class CreateVideoController {
    async handle(request : Request, response : Response){
        const {name , category_id, description, duration} = request.body;

         const service = new CreateVideoService();

         const result = await service.execute({name, category_id, description, duration});

         if(result instanceof Error){
            return response.status(400).json(result.message);
         }

         return response.json(result);
    }
}