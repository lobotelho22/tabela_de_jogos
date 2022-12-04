import { Request, Response } from 'express';
import TeamsService from '../services/Teams.service';

class TeamsController {
  public static async listAllTeams(_req: Request, res: Response) {
    const teamList = await TeamsService.getAllTeams();
    return res.status(200).json(teamList);
  }

  public static async listOneTeam(req: Request, res: Response) {
    const { id } = req.params;
    const teamById = await TeamsService.getTeamById(Number(id));
    return res.status(teamById.statusCode).json(teamById.message);
  }
}

export default TeamsController;
