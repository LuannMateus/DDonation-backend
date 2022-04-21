import { Router } from 'express';

import CreateDonorController from '../../presentation/controllers/CreateDonorController';
import FindAllDonorsController from '../../presentation/controllers/FindAllDonorsController';
import FindDonorByIdController from '../../presentation/controllers/FindDonorByIdController';
import UpdateDonorByIdController from '../../presentation/controllers/UpdateDonorByIdController';

const donorRouter = Router();

donorRouter.get('/donors/:id', new FindDonorByIdController().handle);

donorRouter.get('/donors', new FindAllDonorsController().handle);

donorRouter.post('/donors', new CreateDonorController().handle);

donorRouter.put('/donors/:id', new UpdateDonorByIdController().handle);

export default donorRouter;
