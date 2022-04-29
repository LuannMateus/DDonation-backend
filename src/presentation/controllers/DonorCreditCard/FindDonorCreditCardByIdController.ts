import { Request, Response } from 'express';
import { FindDonorCreditCardById } from '../../../domain/usecases/DonorCreditCard/FindDonorCreditCardById';
import { DonorCreditCardRepository } from '../../../infra/repositories/DonorCreditCardRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class FindDonorCreditCardByIdController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) throw new BadRequestError('Missing id');

            const donorCreditCardRepository = new DonorCreditCardRepository();
            const findDonorCreditCardByIdUseCase = new FindDonorCreditCardById(
                donorCreditCardRepository,
            );

            const donorCreditCard =
                await findDonorCreditCardByIdUseCase.execute(id);

            return res.status(200).json(donorCreditCard);
        } catch (e) {
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
                    message: e,
                });
            }
        }
    }
}
