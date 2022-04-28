import { Request, Response } from 'express';
import { FindDonationRequestById } from '../../../domain/usecases/DonationRequest/FindDonationRequestById';
import DonationRequestRepository from '../../../infra/repositories/DonationRequestRepository';
import { BadRequestError, NotFoundError, ServerError } from '../../errors';

export class FindDonationRequestByIdController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) throw new BadRequestError('Missing id');

            const donationRequestRepository = new DonationRequestRepository();
            const findDonationRequestByIdUseCase = new FindDonationRequestById(
                donationRequestRepository,
            );
            const donationRequest =
                await findDonationRequestByIdUseCase.execute(id);

            return res.status(200).send(donationRequest);
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
