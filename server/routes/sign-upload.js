import express from 'express';
// const express = require('express');
import { generateSignture } from '../controllers/sign-upload.js';

const router = express.Router();

router.post('/', generateSignture);

export default router;