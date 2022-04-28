import { Router } from 'express';

import FindAllDonorsController from '../../presentation/controllers/Donor/FindAllDonorsController';
import FindDonorByIdController from '../../presentation/controllers/Donor/FindDonorByIdController';
import CreateDonorController from '../../presentation/controllers/Donor/CreateDonorController';
import UpdateDonorByIdController from '../../presentation/controllers/Donor/UpdateDonorByIdController';
import DeleteDonorByIdController from '../../presentation/controllers/Donor/DeleteDonorByIdController';

const donorRouter = Router();

donorRouter.get('/donors/:id', new FindDonorByIdController().handle);

donorRouter.get('/donors', new FindAllDonorsController().handle);

donorRouter.post('/donors', new CreateDonorController().handle);

donorRouter.put('/donors/:id', new UpdateDonorByIdController().handle);

donorRouter.delete('/donors/:id', new DeleteDonorByIdController().handle);

export default donorRouter;
