import { Request, Response } from 'express';
import { FindAllDonationRequests } from '../../../domain/usecases/DonationRequest/FindAllDonationRequests';
import DonationRequestRepository from '../../../infra/repositories/DonationRequestRepository';

export class FindAllDonationRequestController {
    async handle(req: Request, res: Response) {
        const donationRequestRepository = new DonationRequestRepository();
        const findAllDonationRequestsUseCase = new FindAllDonationRequests(
            donationRequestRepository,
        );

        try {
            const donationRequests =
                await findAllDonationRequestsUseCase.execute();

            return res.status(200).json(donationRequests);
        } catch (e) {
            return res.status(400).end();
        }
    }
}
