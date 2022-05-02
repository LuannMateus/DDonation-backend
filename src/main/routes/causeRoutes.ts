import { Router } from 'express';

import { FindAllCausesController } from '../../presentation/controllers/Cause/FindAllCausesController';

const causeRouter = Router();

causeRouter.get('/causes', new FindAllCausesController().handle);

export default causeRouter;
