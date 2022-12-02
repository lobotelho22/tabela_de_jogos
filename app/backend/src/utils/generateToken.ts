import { sign } from 'jsonwebtoken';
import { User } from '../interfaces';

import 'dotenv/config';

function generateToken(username: User): string {
  const token = sign(
    { username },
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '30d' },
  );
  return token;
}

export default generateToken;
