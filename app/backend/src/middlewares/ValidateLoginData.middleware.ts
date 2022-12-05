import { NextFunction, Request, Response } from 'express';
import { ALL_FIELDS_MUST_BE_FILLED } from '../utils/globalConstants';

function validateLoginData(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  if (!email || !password || password.length < 7) {
    return res.status(400).json(ALL_FIELDS_MUST_BE_FILLED);
  }

  next();
}

export default validateLoginData;
