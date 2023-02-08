import { User } from '@prisma/client';
import { CreateUserInputType, UserResponseType } from '@user/schemas';

export interface UserRepository {
  createUser(data: CreateUserInputType): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  getUserById(id: string): Promise<User | null>;
}
