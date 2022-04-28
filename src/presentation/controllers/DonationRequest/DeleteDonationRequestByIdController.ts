import { Request, Response } from 'express';
import { DeleteDonationRequestById } from '../../../domain/usecases/DonationRequest/DeleteDonationRequestById';
import DonationRequestRepository from '../../../infra/repositories/DonationRequestRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class DeleteDonationRequestByIdController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) throw new BadRequestError('Missing id param');

            const donationRequestRepository = new DonationRequestRepository();
            const deleteDonationRequestByIdUseCase =
                new DeleteDonationRequestById(donationRequestRepository);

            await deleteDonationRequestByIdUseCase.execute(id);

            return res.status(204).end();
        } catch (e) {
            if (e instanceof BadRequestError) {
                return res.status(400).json({
                    error: e.message,
                });
            }

            if (e instanceof NotFoundError) {
                return res.status(404).json({
                    error: e.message,
                });
            }

            if (e instanceof ServerError) {
                return res.status(500).json({
                    error: e.message,
                });
            }
        }
    }
}
