import { NextFunction, Request, Response } from 'express';
import validateToken from '../utils/validateToken';
import { EQUAL_TEAMS_MSG, INVALID_TOKEN, NO_TEAM_MSG } from '../utils/globalConstants';
import TeamsService from '../database/services/Teams.service';

class validationFunctions {
  public static validateTokenMid(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) { return res.status(401).json(INVALID_TOKEN); }
    const response = validateToken(authorization);

    if (response === 'Erro de autorização') {
      return res.status(401).json(INVALID_TOKEN);
    }
    next();
  }

  public static async validateTeamsId(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;

    // if (!homeTeam || !awayTeam) { return res.status(401).json({ message: 'Verify sending data' }); }

    if (homeTeam === awayTeam) { return res.status(422).json(EQUAL_TEAMS_MSG); }

    const teamsArray = [homeTeam, awayTeam];

    try {
      const promiseResultArray = (teamsArray.map(async (team) => {
        const response = await TeamsService.getTeamById(Number(team));
        return response.statusCode;
      }));
      const resultArray = await Promise.all(promiseResultArray);
      if (resultArray.includes(400)) { return res.status(404).json(NO_TEAM_MSG); }
    } catch (err) {
      console.error('Erro na tentativa de validação');
    }

    next();
  }
}

export default validationFunctions;
