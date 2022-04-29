import { Request, Response } from 'express';
import { FindAllDonorCreditCards } from '../../../domain/usecases/DonorCreditCard/FindAllDonorCreditCards';
import { DonorCreditCardRepository } from '../../../infra/repositories/DonorCreditCardRepository';
import { ServerError } from '../../errors';

export class FindAllDonorCreditCardController {
    async handle(req: Request, res: Response) {
        const donorCreditCardRepository = new DonorCreditCardRepository();
        const findAllDonorCreditCardUseCase = new FindAllDonorCreditCards(
            donorCreditCardRepository,
        );

        try {
            const donorCreditCard =
                await findAllDonorCreditCardUseCase.execute();

            return res.status(200).json(donorCreditCard);
        } catch (e) {
            if (e instanceof ServerError) {
                return res.status(500).json({
                    message: e.message,
                });
            }
        }
    }
}
