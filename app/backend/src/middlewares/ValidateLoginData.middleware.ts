import { NextFunction, Request, Response } from 'express';

function validateLoginData(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  if (!email || !password || password.length < 7) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  next();
}

export default validateLoginData;
