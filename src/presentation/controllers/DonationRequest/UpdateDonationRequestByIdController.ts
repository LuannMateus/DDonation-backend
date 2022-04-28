import { Request, Response } from 'express';
import DonationRequest from '../../../domain/entities/DonationRequest';
import { UpdateDonationRequestById } from '../../../domain/usecases/DonationRequest/UpdateDonationRequestById';
import DonationRequestRepository from '../../../infra/repositories/DonationRequestRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class UpdateDonationRequestByIdController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const donationRequest = req.body as DonationRequest;

            if (!id) throw new BadRequestError('Missing id param');

            if (!donationRequest)
                throw new BadRequestError('Missing donationRequest new values');

            const donationRequestRepository = new DonationRequestRepository();
            const updateDonationRequestByIdUseCase =
                new UpdateDonationRequestById(donationRequestRepository);

            await updateDonationRequestByIdUseCase.execute(id, donationRequest);

            return res.status(204).end();
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
                    message: e.message,
                });
            }
        }
    }
}
