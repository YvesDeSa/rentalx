import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface TokenPayload {
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
    throw new Error('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, "ju54bs38bwnd043hn04pwp234qde6ewf16we");

    const { sub: user_id } = decoded as TokenPayload;

    const userRepository = new UserRepository();
    const user = userRepository.findById(user_id);

    if (!user) {
      throw new Error("user does not exists");
    }

    next();

  } catch {
    throw new Error('Invalid JWT token');
  }
}
