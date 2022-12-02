import generateToken from '../../utils/generateToken';
import UserModel from '../models/Users';
import { Login, IError } from '../../interfaces/index';

class LoginService {
  public static async login(loginInfo: Login): Promise<IError> {
    const { email, password } = loginInfo;

    const userData = await UserModel.findOne({ where: { email } });
    const userPass = userData?.dataValues.password;
    const testPass = (password === userPass);

    if (!userData || !testPass) {
      return {
        statusCode: 401,
        message: 'Incorrect email or password',
      };
    }

    const token = generateToken(userData.dataValues.username);

    return {
      statusCode: null,
      message: token,
    };
  }
}

export default LoginService;
