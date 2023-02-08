import { CreateUserInputType, UserResponseType } from '@user/schemas';
import { prisma } from './../../../../utils/prisma';
import { UserRepository } from '../user.repository';

export class PrismaUserRepository implements UserRepository {
  async createUser(
    data: CreateUserInputType
  ): Promise<UserResponseType | null> {
    const user = await prisma.user.create({
      data
    });
    return user;
  }
  async getUserByEmail(email: string): Promise<UserResponseType | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    return user;
  }
  async getUserById(id: string): Promise<UserResponseType | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    });
    return user;
  }
}
