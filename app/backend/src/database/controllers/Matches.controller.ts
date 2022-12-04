import { Request, Response } from 'express';
import MatchesService from '../services/Matches.service';

class MatchesController {
  public static async listMatches(req: Request, res: Response) {
    const result = await MatchesService.getAllMatches();

    return res.status(200).json(result);
  }
}

export default MatchesController;
