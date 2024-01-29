import { Video } from "../models/vidDetail.js";

export const getVideos = async (req, res, next) => {
    try {
        // Fetch all videos from the database
        const videos = await Video.find();
        console.log(`Server: ${videos}`);
        res.status(200).json({
            success: true,
            videos,
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        next(error);
    }
};

export const getVideosById = async (req, res, next) => {
    const videoId = req.params.id;
    console.log(videoId)

    try {
        const videosById = await Video.findById(videoId);
        console.log(`Server id: ${videosById}`);
        res.status(200).json({
            success: true,
            videosById,
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        next(error);
    }
};
