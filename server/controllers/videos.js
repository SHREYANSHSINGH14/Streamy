import { Video } from '../models/vidDetail.js';

export const createVideo = async(req, res, next) => {

    const title = req.body[0];
    const description = req.body[1];
    const imageUrl = req.body[2];
    const videoUrl = req.body[3];
    
    if (!imageUrl||!videoUrl){
        res.status(400);
        return next(new Error("imageUrl & videoUrl fields are required"));
    }

    try {
        const video = await Video.create({
            title,
            description,
            imageUrl,
            videoUrl,
        });

        res.status(201).json({
            success: true,
            video,
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        next(error);
    }
}