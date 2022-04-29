import { Router } from 'express';
import { CreateDonorCreditCardController } from '../../presentation/controllers/DonorCreditCard/CreateDonorCreditCardController';
import { FindAllDonorCreditCardController } from '../../presentation/controllers/DonorCreditCard/FindAllDonorCreditCardController';

const donorCreditCardRouter = Router();

donorCreditCardRouter.get(
    '/donorCreditCards',
    new FindAllDonorCreditCardController().handle,
);

donorCreditCardRouter.post(
    '/donorCreditCards',
    new CreateDonorCreditCardController().handle,
);

export default donorCreditCardRouter;
