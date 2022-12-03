import { Request, Response } from 'express';
import LoginService from '../services/Login.service';

class LoginController {
  public static async login(req: Request, res: Response) {
    const loginInfo = req.body;
    const response = await LoginService.login(loginInfo);

    return res.status(response.statusCode).json(response.message);
  }

  public static async validateRoute(req: Request, res: Response) {
    const authToken = req.headers.authorization;

    const response = await LoginService.loginValidate(authToken);

    return res.status(response.statusCode).json(response.message);
  }
}

export default LoginController;
