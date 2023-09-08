import { Category } from "../entities/Category";
import { AppDataSource } from "../data-source";

type categoryRequest = {
    name : string,
    description : string
}

export class CreateCategoryServices {
    async execute ({
        name, 
        description
    } : categoryRequest) : Promise <Category | Error>{
        const categoryRepository = AppDataSource.getRepository(Category);

        if(await categoryRepository.findOneBy({ name })){
            return new Error("category already exists");
        }

        const repo = categoryRepository.create({
            name,
            description
        });
        await categoryRepository.save(repo);

        return repo;

    }
}
