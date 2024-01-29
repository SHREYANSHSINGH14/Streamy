import express from 'express';
import { getVideos, getVideosById } from '../controllers/getVideos.js';

const router = express.Router();

router.get('/', getVideos);
router.get('/:id', getVideosById)

export default router;