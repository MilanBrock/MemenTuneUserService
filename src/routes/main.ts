// src/routes/users.ts
import { Router } from 'express';
import { UserDescriptionUpdate} from '../controllers/mainController';

const router = Router();

router.post("/description", UserDescriptionUpdate);


export default router;
