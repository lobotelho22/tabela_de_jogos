import { Request, Response } from 'express';
import { IMatch } from '../../interfaces/index';
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

  public static async saveMatchInfo(req: Request, res: Response) {
    const insertData: IMatch = {
      homeTeam: req.body.homeTeam,
      homeTeamGoals: req.body.homeTeamGoals,
      awayTeam: req.body.awayTeam,
      awayTeamGoals: req.body.awayTeamGoals,
      inProgress: true,
    };

    const newMatch = await MatchesService.saveMatch(insertData);

    return res.status(newMatch.statusCode).json(newMatch.message.newMatch);
  }

  public static async finishMatchById(req: Request, res: Response) {
    const { id } = req.params;
    const finishedMatch = await MatchesService.finishMatch(Number(id));
    return res.status(finishedMatch.statusCode).json(finishedMatch.message);
  }

  public static async editMatchScore(req: Request, res: Response) {
    const { id } = req.params;
    const updatedScoreboard = await MatchesService.editScoreboard(Number(id), req.body);
    return res.status(updatedScoreboard.statusCode).json(updatedScoreboard.message);
  }
}

export default MatchesController;
