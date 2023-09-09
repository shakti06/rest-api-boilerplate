import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";

type  categoryRequest = {
    id : string,
    name : string,
    description: string
}

export class UpdateCategoryService {
    async execute({
        id,
        name, 
        description
    }: categoryRequest) :Promise<Category | Error >{
        const repo = AppDataSource.getRepository(Category);
        const category = await repo.findOneBy({id });

        if(!category){
            return new Error('category does not exists');
        }
        category.name = name;
        category.description = description;

        await repo.save(category);
        
        return category;
    }
}