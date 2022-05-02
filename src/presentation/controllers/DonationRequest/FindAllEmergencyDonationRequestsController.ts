import { Request, Response } from 'express';
import { FindAllEmergencyDonationRequests } from '../../../domain/usecases/DonationRequest/FindAllEmergencyDonationRequests';
import DonationRequestRepository from '../../../infra/repositories/DonationRequestRepository';
import { ServerError } from '../../errors';

export class FindAllEmergencyDonationRequestsController {
    async handle(req: Request, res: Response) {
        try {
            const donationRequestRepository = new DonationRequestRepository();
            const findAllEmergencyDonationRequests =
                new FindAllEmergencyDonationRequests(donationRequestRepository);

            const donationRequests =
                await findAllEmergencyDonationRequests.execute();

            return res.json(donationRequests);
        } catch (e) {
            if (e instanceof ServerError) {
                return res.status(500).json({
                    message: e,
                });
            }
        }
    }
}
