import { Request, Response } from 'express';
import parseBoolean from '../../utils/parseBoolean';
import MatchesService from '../services/Matches.service';

class MatchesController {
  public static async listMatches(req: Request, res: Response) {
    const testProgress = parseBoolean(req.query);

    if (testProgress === undefined) {
      const result = await MatchesService.getAllMatches();
      return res.status(200).json(result);
    }
    if (testProgress) {
      const result = await MatchesService.getMatchesInProgress();
      return res.status(200).json(result);
    }
    if (!testProgress) {
      const result = await MatchesService.getMatchesNotInProgress();
      return res.status(200).json(result);
    }
  }
}

export default MatchesController;
