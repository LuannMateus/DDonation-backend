import { Request, Response } from 'express';
import DonationRequest from '../domain/entities/DonationRequest';
import CreateDonationRequest from '../domain/usecases/CreateDonationRequest';
import DonationRequestRepository from '../infra/repository/DonationRequestRepository';

export default class CreateDonationRequestController {
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
            await createDonationRequestUseCase.execute(donationRequest);
        } catch (e) {
            return res.status(400).end();
        }

        return res.status(201).end();
    }
}
