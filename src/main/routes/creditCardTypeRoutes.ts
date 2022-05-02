import { Router } from 'express';

import { CreateCreditCardTypeController } from '../../presentation/controllers/CreditCardType/CreateCreditCardTypeController';
import { DeleteCreditCardTypeByIdController } from '../../presentation/controllers/CreditCardType/DeleteCreditCardTypeByIdController';
import { FindAllCreditCardTypesController } from '../../presentation/controllers/CreditCardType/FindAllCreditCardTypesController';
import { FindCreditCardTypeByIdController } from '../../presentation/controllers/CreditCardType/FindCreditCardTypeByIdController';
import { UpdateCreditCardTypeByIdController } from '../../presentation/controllers/CreditCardType/UpdateCreditCardTypeByIdController';

const creditCardTypeRouter = Router();

creditCardTypeRouter.get(
    '/creditCardTypes/:id',
    new FindCreditCardTypeByIdController().handle,
);

creditCardTypeRouter.get(
    '/creditCardTypes',
    new FindAllCreditCardTypesController().handle,
);

creditCardTypeRouter.post(
    '/creditCardTypes',
    new CreateCreditCardTypeController().handle,
);

creditCardTypeRouter.patch(
    '/creditCardTypes/:id',
    new UpdateCreditCardTypeByIdController().handle,
);

creditCardTypeRouter.delete(
    '/creditCardTypes/:id',
    new DeleteCreditCardTypeByIdController().handle,
);

export default creditCardTypeRouter;
