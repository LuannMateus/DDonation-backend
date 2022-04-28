import { Request, Response } from 'express';
import DonationRequest from '../../../domain/entities/DonationRequest';
import CreateDonationRequest from '../../../domain/usecases/DonationRequest/CreateDonationRequest';
import DonationRequestRepository from '../../../infra/repositories/DonationRequestRepository';
import { BadRequestError, ServerError } from '../../errors';

export class CreateDonationRequestController {
    async handle(req: Request, res: Response) {
        const {
            id,
            title,
            description,
            daysRemaining,
            target,
            reached,
            ownerId,
        } = req.body as DonationRequest;

        const donationRequestRepository = new DonationRequestRepository();
        const createDonationRequestUseCase = new CreateDonationRequest(
            donationRequestRepository,
        );

        const donationRequest = new DonationRequest(
            id,
            title,
            description,
            ownerId,
            daysRemaining,
            target,
            reached,
        );

        try {
            const donationRequests = await createDonationRequestUseCase.execute(
                donationRequest,
            );

            return res.status(201).json(donationRequests);
        } catch (e) {
            if (e instanceof BadRequestError) {
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
