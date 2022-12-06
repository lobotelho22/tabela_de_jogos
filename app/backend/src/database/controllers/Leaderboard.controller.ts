import { Request, Response } from 'express';
import { ILeaderboard, IMatch } from '../../interfaces/index';
import MatchesService from '../services/Matches.service';
import TeamsService from '../services/Teams.service';

type IResults = {
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
};

type iGoalsInfo = {
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
};

class LeaderboardController {
  public static async HomeStats(req: Request, res: Response) {
    const homeMatchesByTeams = await LeaderboardController.getHomeMatchesByTeams();
    const datahomeMatches = homeMatchesByTeams.map((team) => {
      const totalGames = team.homeMatches.length;
      const results = LeaderboardController.getResults(team.homeMatches);
      const goalsInfo = LeaderboardController.getGoalsInfo(team.homeMatches);

      const finalDataHomeMatches = LeaderboardController
        .getFormatedData(results, goalsInfo, totalGames);

      return {
        name: team.name,
        totalPoints: LeaderboardController.getTotalPoints(results),
        totalGames,
        ...finalDataHomeMatches,
      };
    });
    datahomeMatches.sort((a, b) => LeaderboardController.sortLeaderboard(a, b));
    res.status(200).json(datahomeMatches);
  }

  private static async getHomeMatchesByTeams() {
    const allTeamsData = await TeamsService.getAllTeams();
    const allMatchesData = await MatchesService.getAllMatches();
    const homeMatchesByTeams = allTeamsData.map((team) => {
      const homeGames = allMatchesData.filter((match) => {
        const vaildEntrance = match.homeTeam === team.id && !match.inProgress;
        return vaildEntrance;
      });
      return { name: team.teamName, homeMatches: [...homeGames] };
    });
    return homeMatchesByTeams;
  }

  private static getResults(homeMatches: Array<IMatch>): IResults {
    let totalVictories = 0;
    let totalDraws = 0;
    let totalLosses = 0;
    homeMatches.forEach((match) => {
      if (match.homeTeamGoals > match.awayTeamGoals) { totalVictories += 1; }
      if (match.homeTeamGoals === match.awayTeamGoals) { totalDraws += 1; }
      if (match.homeTeamGoals < match.awayTeamGoals) { totalLosses += 1; }
    });

    return { totalVictories, totalDraws, totalLosses };
  }

  private static getTotalPoints(results: IResults): number {
    const { totalVictories, totalDraws } = results;

    return (totalVictories * 3) + totalDraws;
  }

  private static getGoalsInfo(matches: Array<IMatch>): iGoalsInfo {
    const goalsFavor = matches
      .map((match) => match.homeTeamGoals)
      .reduce((total, num) => total + num);
    const goalsOwn = matches
      .map((match) => match.awayTeamGoals)
      .reduce((total, num) => total + num);

    return {
      goalsFavor,
      goalsOwn,
      goalsBalance: goalsFavor - goalsOwn,
    };
  }

  private static getFormatedData(results: IResults, goalsInfo: iGoalsInfo, totalGames: number) {
    const { totalVictories, totalDraws, totalLosses } = results;
    const { goalsFavor, goalsOwn, goalsBalance } = goalsInfo;
    const points = LeaderboardController.getTotalPoints(results);
    const efficiency = ((points / (totalGames * 3)) * 100).toFixed(2);

    return {
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency,
    };
  }

  private static sortLeaderboard(a: ILeaderboard, b: ILeaderboard) {
    let orderCritery = b.totalPoints - a.totalPoints;
    if (orderCritery === 0) { orderCritery = b.goalsBalance - a.goalsBalance; }
    if (orderCritery === 0) { orderCritery = b.goalsFavor - a.goalsFavor; }
    if (orderCritery === 0) { orderCritery = a.goalsOwn - b.goalsOwn; }
    return orderCritery;
  }
}

export default LeaderboardController;
