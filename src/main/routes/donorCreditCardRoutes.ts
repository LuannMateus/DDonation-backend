import { Router } from 'express';
import { FindAllDonorCreditCardController } from '../../presentation/controllers/DonorCreditCard/FindAllDonorCreditCardController';

const donorCreditCardRouter = Router();

donorCreditCardRouter.get(
    '/donorCreditCards',
    new FindAllDonorCreditCardController().handle,
);

export default donorCreditCardRouter;
