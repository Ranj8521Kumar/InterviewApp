import { Router } from 'express';
import upload from '../middleware/upload.js';
import { analyseResume } from '../controllers/resume.controller.js';
const router = Router();

router.post('/analyseresume', upload.single('resume'), analyseResume);

export default router;