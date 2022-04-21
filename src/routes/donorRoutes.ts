import { Router } from 'express';
import CreateDonorController from '../controller/CreateDonorController';
import FindAllDonorsController from '../controller/FindAllDonorsController';

const donorRouter = Router();

donorRouter.get('/donors', new FindAllDonorsController().handle);

donorRouter.post('/donors', new CreateDonorController().handle);

export default donorRouter;
