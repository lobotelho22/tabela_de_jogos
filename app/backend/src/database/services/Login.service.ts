import { compare } from 'bcryptjs';
import { JwtPayload } from 'jsonwebtoken';
import validateToken from '../../utils/validateToken';
import generateToken from '../../utils/generateToken';
import UserModel from '../models/Users';
import { Login, IError } from '../../interfaces/index';

class LoginService {
  public static async login(loginInfo: Login): Promise<IError> {
    const { email, password } = loginInfo;
    let testPass = false;

    const userData = await UserModel.findOne({ where: { email } });
    const userPass = userData?.dataValues.password;

    if (userPass) { testPass = await compare(password, userPass); }

    if (!userData || !testPass) {
      return {
        statusCode: 401,
        message: { message: 'Incorrect email or password' },
      };
    }

    const token = generateToken(userData.dataValues);

    return {
      statusCode: 200,
      message: { token },
    };
  }

  public static async loginValidate(authToken: string | undefined): Promise<IError> {
    let isValid : string | JwtPayload = '';

    if (authToken !== undefined) {
      isValid = validateToken(authToken);
    }

    if (isValid === 'Erro de autorização') {
      return {
        statusCode: 401,
        message: { message: 'Authorization Error' },
      };
    }

    return {
      statusCode: 200,
      message: { role: Object.values(isValid)[2] },
    };
  }
}

export default LoginService;
