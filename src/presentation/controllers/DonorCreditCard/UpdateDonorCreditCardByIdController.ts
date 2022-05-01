import { Request, Response } from 'express';
import DonorCreditCard from '../../../domain/entities/DonorCreditCard';
import { UpdateDonorCreditCardById } from '../../../domain/usecases/DonorCreditCard/UpdateDonorCreditCardById';
import { DonorCreditCardRepository } from '../../../infra/repositories/DonorCreditCardRepository';
import {
    BadRequestError,
    FkError,
    NotFoundError,
    ServerError,
} from '../../errors';

export class UpdateDonorCreditCardByIdController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const donorCreditCard = req.body as DonorCreditCard;

            if (!id) throw new BadRequestError('Missing id param');

            if (!donorCreditCard)
                throw new BadRequestError('Missing donorCreditCard new values');

            const donorCreditCardRepository = new DonorCreditCardRepository();
            const updateDonorCreditCardByIdUseCase =
                new UpdateDonorCreditCardById(donorCreditCardRepository);

            const updatedDonorCreditCard =
                await updateDonorCreditCardByIdUseCase.execute(
                    id,
                    donorCreditCard,
                );

            return res.status(200).json(updatedDonorCreditCard);
        } catch (e) {
            if (e instanceof FkError) {
                return res.status(400).json({
                    message: e.message,
                });
            }

            if (e instanceof BadRequestError) {
                return res.status(400).json({
                    message: e.message,
                });
            }

            if (e instanceof NotFoundError) {
                return res.status(404).json({
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
