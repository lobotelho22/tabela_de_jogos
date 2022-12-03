import { sign } from 'jsonwebtoken';
import { User } from '../interfaces';

function generateToken(userData: User): string {
  const token = sign(
    userData,
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '30d' },
  );

  return token;
}

export default generateToken;
