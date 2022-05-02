import { prisma } from '../database/prisma';
import Cause from '../../domain/entities/Cause';
import { ServerError } from '../../presentation/errors';
import { ICauseRepository } from '../../domain/repositories/ICauseRepository';

export class CauseRepository implements ICauseRepository {
    async findAll(): Promise<Cause[]> {
        try {
            return await prisma.cause.findMany();
        } catch (e) {
            throw new ServerError();
        }
    }
}
