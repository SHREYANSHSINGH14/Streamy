import express from 'express';
import {createVideo} from '../controllers/videos.js';

const router = express.Router();

router.post('/', createVideo);

export default router;