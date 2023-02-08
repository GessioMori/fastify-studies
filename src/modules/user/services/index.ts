import { User } from '@prisma/client';
import { UserRepository } from '@user/repositories/user.repository';
import { CreateUserInputType } from '@user/schemas';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository
  ) {}

  async execute(data: CreateUserInputType): Promise<User | null> {
    const user = await this.userRepository.getUserByEmail(data.email);

    if (user) {
      throw new Error('User already exists');
    }

    const newUser = await this.userRepository.createUser(data);

    return newUser;
  }
}
