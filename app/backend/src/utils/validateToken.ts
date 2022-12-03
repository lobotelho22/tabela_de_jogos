import { JwtPayload, Secret, verify } from 'jsonwebtoken';

const validateToken = (token: string): string | JwtPayload => {
  try {
    const isValid = verify(token, process.env.JWT_SECRET as Secret);
    return isValid;
  } catch (error) {
    return 'Erro de autorização';
  }
};

export default validateToken;
