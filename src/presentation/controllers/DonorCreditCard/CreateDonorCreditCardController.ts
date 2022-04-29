import { Request, Response } from 'express';
import DonorCreditCard from '../../../domain/entities/DonorCreditCard';
import { CreateDonorCreditCard } from '../../../domain/usecases/DonorCreditCard/CreateDonorCreditCard';
import { DonorCreditCardRepository } from '../../../infra/repositories/DonorCreditCardRepository';
import { BadRequestError, FkError, ServerError } from '../../errors';

export class CreateDonorCreditCardController {
    async handle(req: Request, res: Response) {
        const {
            id,
            creditCardTypeId,
            donorId,
            holderName,
            creditCardNumber,
            validity,
            cvv,
        } = req.body as DonorCreditCard;

        const donorCreditCardRepository = new DonorCreditCardRepository();
        const createDonorCreditCardUseCase = new CreateDonorCreditCard(
            donorCreditCardRepository,
        );

        const donorCreditCard = new DonorCreditCard(
            id,
            creditCardTypeId,
            donorId,
            holderName,
            creditCardNumber,
            validity,
            cvv,
        );

        try {
            await createDonorCreditCardUseCase.execute(donorCreditCard);

            return res.status(200).json(donorCreditCard);
        } catch (e) {
            if (e instanceof BadRequestError) {
                return res.status(400).json({
                    message: e.message,
                });
            }

            if (e instanceof FkError) {
                return res.status(400).json({
                    message: e.message,
                });
            }

            if (e instanceof ServerError) {
                return res.status(500).json({
                    message: e.message,
                });
            }
        }
    }
}
