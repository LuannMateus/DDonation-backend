import { Router } from 'express';

import CreateDonorController from '../controller/CreateDonorController';
import FindAllDonorsController from '../controller/FindAllDonorsController';
import FindDonorByIdController from '../controller/FindDonorByIdController';

const donorRouter = Router();

donorRouter.get('/donors/:id', new FindDonorByIdController().handle);

donorRouter.get('/donors', new FindAllDonorsController().handle);

donorRouter.post('/donors', new CreateDonorController().handle);

export default donorRouter;
