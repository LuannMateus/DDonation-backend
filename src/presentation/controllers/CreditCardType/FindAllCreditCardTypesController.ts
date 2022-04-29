import { Request, Response } from 'express';
import { FindAllCreditCardTypes } from '../../../domain/usecases/CreditCardType/FindAllCreditCardTypes';
import { CreditCardTypeRepository } from '../../../infra/repositories/CreditCardTypeRepository';
import { ServerError } from '../../errors';

export class FindAllCreditCardTypesController {
    async handle(req: Request, res: Response) {
        const creditCardTypeRepository = new CreditCardTypeRepository();
        const findAllCreditCardTypesUseCase = new FindAllCreditCardTypes(
            creditCardTypeRepository,
        );

        try {
            const creditCardTypes =
                await findAllCreditCardTypesUseCase.execute();

            return res.status(200).json(creditCardTypes);
        } catch (e) {
            if (e instanceof ServerError) {
                return res.status(500).json({
                    message: e.message,
                });
            }
        }
    }
}
