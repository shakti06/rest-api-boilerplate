import { GetAllCategories } from "../services/GetAllCategories";
import { Request, Response } from "express";

export class GetAllCategoriesController {
    async handle(request: Request, response: Response){
        const service = new GetAllCategories();
        const categories : any = await service.execute();

        return response.json(categories);
    }
}