import { IReturnInfo } from '../../interfaces/index';
import Team from '../../interfaces/Team.interface';
import TeamModel from '../models/Teams.model';

class TeamsService {
  public static async getAllTeams(): Promise<Array<Team>> {
    const teamList = await TeamModel.findAll();

    return teamList.map((team) => team.dataValues);
  }

  public static async getTeamById(id: number): Promise<IReturnInfo> {
    const teamById = await TeamModel.findOne({ where: { id } });
    const teamData = teamById?.dataValues;

    if (!teamData) {
      return {
        statusCode: 400,
        message: { message: 'Incorrect team id' },
      };
    }

    return {
      statusCode: 200,
      message: { ...teamData },
    };
  }
}

export default TeamsService;
