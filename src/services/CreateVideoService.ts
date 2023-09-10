import { AppDataSource } from "../data-source"
import { Category } from "../entities/Category";
import {Video} from "../entities/Video";

type videoRequest = {
    name : string,
    category_id : string,
    description : string,
    duration: number
}

export class CreateVideoService{
    async execute({
        name, 
        category_id, 
        description,
        duration
    } : videoRequest) :Promise<Video | Error>{
        const videoRepo = AppDataSource.getRepository(Video);
        const categoryRepo = AppDataSource.getRepository(Category);

        // if(!(await categoryRepo.findOne(category_id))){
        //     return new Error('Category does not exists');
        // }

        const videos =  videoRepo.create({name, category_id, description,duration});
        await videoRepo.save(videos);

        return videos;
    }
}