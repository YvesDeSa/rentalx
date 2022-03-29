import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface IPayload {
  iat: number;
  exp: number;
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      "ju54bs38bwnd043hn04pwp234qde6ewf16we"
    ) as IPayload;

    const userRepository = new UserRepository();
    const user = userRepository.findById(user_id);

    if (!user) {
      throw new AppError("user does not exists", 401);
    }

    next();

  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}
