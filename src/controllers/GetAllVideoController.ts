import { Request, Response } from "express";
import { GetAllVideoService } from "../services/GetAllVideoService";

export class GetAllVideosController {
    async handle(request: Request, response: Response){
        const service = new GetAllVideoService();
        const videos = await service.execute();

        return response.json(videos);
    }
}