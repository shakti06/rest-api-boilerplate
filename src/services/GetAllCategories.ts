import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";

export class GetAllCategories {
    async execute(){
        const repo = AppDataSource.getRepository(Category);

        const categories = await repo.find();

        return categories;

    }
}