import { Router } from 'express';
import { FindAllCreditCardTypesController } from '../../presentation/controllers/CreditCardType/FindAllCreditCardTypesController';

const donationRequestRouter = Router();

donationRequestRouter.get(
    '/creditCardTypes',
    new FindAllCreditCardTypesController().handle,
);

export default donationRequestRouter;
