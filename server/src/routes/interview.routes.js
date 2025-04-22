import { Router } from 'express';
const router = Router();
import { getQuestion, SubmitAnswer } from '../controllers/interview.controller.js';

router.get('/question', getQuestion);
router.post('/answer', SubmitAnswer);

export default router;