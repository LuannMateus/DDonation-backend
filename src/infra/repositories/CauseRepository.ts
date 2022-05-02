import { prisma } from '../database/prisma';
import Cause from '../../domain/entities/Cause';
import {
    BadRequestError,
    NotFoundError,
    ServerError,
} from '../../presentation/errors';
import { ICauseRepository } from '../../domain/repositories/ICauseRepository';
import {
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
} from '@prisma/client/runtime';

export class CauseRepository implements ICauseRepository {
    async save(cause: Cause): Promise<void> {
        try {
            await prisma.cause.create({
                data: cause,
            });
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                throw new BadRequestError();
            }

            if (e instanceof PrismaClientValidationError) {
                throw new BadRequestError();
            }

            throw new ServerError();
        }
    }

    async findAll(): Promise<Cause[]> {
        try {
            return await prisma.cause.findMany();
        } catch (e) {
            throw new ServerError();
        }
    }

    async findById(id: string): Promise<Cause> {
        try {
            const cause = await prisma.cause.findUnique({
                where: { id },
            });

            if (!cause) throw new NotFoundError();

            return cause;
        } catch (e) {
            if (e instanceof NotFoundError) throw new NotFoundError();

            throw new ServerError();
        }
    }
}
