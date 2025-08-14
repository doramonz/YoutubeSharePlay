import { Router } from 'express';
import * as controller from '../controllers/indexController.js';

const router = Router();

router.get('/', controller.TestIndexController.getIndex);

export default router;
export { router }