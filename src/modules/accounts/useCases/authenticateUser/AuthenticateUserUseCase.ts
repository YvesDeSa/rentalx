import { inject, injectable } from "tsyringe"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

import { IUsersRepository } from "../../repositories/IUsersRepository"

interface IRequest {
  email: string;
  password: string;
}

interface IResponse{
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase{
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}


  async execute({ email, password }: IRequest): Promise<IResponse>{
    const user = await this.userRepository.findByEmail(email);

    if(!user)
      throw new Error("Email or Password incorrect!");

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch)
      throw new Error("Email or Password incorrect!");

    const token = sign({}, "ju54bs38bwnd043hn04pwp234qde6ewf16we", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenResponse: IResponse = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }
    return tokenResponse;
  }
}

export { AuthenticateUserUseCase}
