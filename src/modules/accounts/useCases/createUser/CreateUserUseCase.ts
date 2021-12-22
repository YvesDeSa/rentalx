import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepository } from "../../repositories/implementations/UserRepository";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {};

  async execute( {name, password, username, email, driver_license }: ICreateUserDTO): Promise<void>{
    const userAlreadyExistis = await this.userRepository.findByUsername(username);
    
    if(userAlreadyExistis)
      throw new Error("User already existi.");

    await this.userRepository.create({
      name,
      username,
      password,
      driver_license,
      email
    });
  };

};

export { CreateUserUseCase };
