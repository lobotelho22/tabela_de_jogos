import { Request, Response } from 'express';
import LoginService from '../services/Login.service';

class LoginController {
  public static async login(req: Request, res: Response) {
    const loginInfo = req.body;
    const response = await LoginService.login(loginInfo);

    if (response.statusCode !== null) {
      return res.status(response.statusCode).json({ message: response.message });
    }

    res.status(200).json({ message: response.message });
  }
}

export default LoginController;
