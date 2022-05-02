import { Router } from 'express';

import { FindAllCausesController } from '../../presentation/controllers/Cause/FindAllCausesController';
import { CreateCauseController } from '../../presentation/controllers/Cause/CreateCauseController';

const causeRouter = Router();

causeRouter.get('/causes', new FindAllCausesController().handle);

causeRouter.post('/causes', new CreateCauseController().handle);

export default causeRouter;
