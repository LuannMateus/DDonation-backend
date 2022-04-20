import { Router } from 'express';
import CreateDonorController from '../controller/CreateDonorController';

const donorRouter = Router();

donorRouter.post('/donors', new CreateDonorController().handle);

export default donorRouter;
