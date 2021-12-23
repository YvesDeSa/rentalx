import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepository } from "../../repositories/implementations/UserRepository";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {};

  async execute( {name, password, email, driver_license }: ICreateUserDTO): Promise<void>{
    const userAlreadyExistis = await this.userRepository.findByEmail(email);
    
    if(userAlreadyExistis)
      throw new Error("User already existi.");

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      password: passwordHash,
      driver_license,
      email
    });
  };

};

export { CreateUserUseCase };
