import mongoose from "mongoose";
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Video = mongoose.model('Video', videoSchema)

