import { AppDataSource } from "../data-source";
import { Video } from "../entities/Video";

export class GetAllVideoService {
    async execute() {
        const repo = AppDataSource.getRepository(Video);

        const videos = await repo.find({
            relations : ['category']
        });

        return videos;

    }
}