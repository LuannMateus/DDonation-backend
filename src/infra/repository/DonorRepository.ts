import Donor from '../../domain/entities/Donor';
import { IDonorRepository } from '../../domain/repository/IDonorRepository';
import { prisma } from '../database/prisma';

export default class DonorRepository implements IDonorRepository {
    async save(donor: Donor): Promise<void> {
        await prisma.donor.create({
            data: { ...donor },
        });
    }
}
