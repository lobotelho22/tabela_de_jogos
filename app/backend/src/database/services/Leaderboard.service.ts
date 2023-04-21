import { ERRORLEADERBOARD } from '../../utils/globalConstants';
import { ILeaderboard, IMatch, IResults, IGoalsInfo } from '../../interfaces';
import MatchesService from './Matches.service';
import TeamsService from './Teams.service';

class LeaderboardService {
  public static async getAllDataMatches() {
    const awayDataMatches = await LeaderboardService.getDataAwayMatches();
    const homeDataMatches: ILeaderboard[] = await LeaderboardService.getDataHomeMatches();

    const allMatchesData = awayDataMatches.map((awayTeam) => {
      const homeTeam = homeDataMatches.find((team) => team.name === awayTeam.name);
      if (!homeTeam) { return ERRORLEADERBOARD; }

      const allStats = LeaderboardService.getAllStats(homeTeam, awayTeam);

      return {
        name: homeTeam.name,
        ...allStats,
      };
    });

    return allMatchesData;
  }

  private static getAllStats(homeTeam: ILeaderboard, awayTeam: ILeaderboard) {
    const totalGames = homeTeam.totalGames + awayTeam.totalGames;

    const results = {
      totalVictories: homeTeam.totalVictories + awayTeam.totalVictories,
      totalDraws: homeTeam.totalDraws + awayTeam.totalDraws,
      totalLosses: homeTeam.totalLosses + awayTeam.totalLosses,
    };

    const goalsInfo = {
      goalsFavor: homeTeam.goalsFavor + awayTeam.goalsFavor,
      goalsOwn: homeTeam.goalsOwn + awayTeam.goalsOwn,
      goalsBalance: (homeTeam.goalsFavor + awayTeam.goalsFavor)
      - (homeTeam.goalsOwn + awayTeam.goalsOwn),
    };

    const finalDataStats = LeaderboardService.getFormatedData(results, goalsInfo, totalGames);

    return {
      totalPoints: LeaderboardService.getTotalPoints(results),
      totalGames: homeTeam.totalGames + awayTeam.totalGames,
      ...finalDataStats,
    };
  }

  public static async getDataAwayMatches() {
    const awayMatchesByTeams = await LeaderboardService.getDataAwayMatchesByTeams();

    const dataAwayMatches = awayMatchesByTeams.map((team) => {
      const totalGames = team.awayMatches.length;
      const results = LeaderboardService.getResults([], team.awayMatches);
      const goalsInfo = LeaderboardService.getGoalsInfo(team.awayMatches, false);

      const finalDataAwayMatches = LeaderboardService
        .getFormatedData(results, goalsInfo, totalGames);

      return {
        name: team.name,
        totalPoints: LeaderboardService.getTotalPoints(results),
        totalGames,
        ...finalDataAwayMatches,
      };
    });

    return dataAwayMatches;
  }

  public static async getDataHomeMatches(): Promise<ILeaderboard[]> {
    const homeMatchesByTeams = await LeaderboardService.getHomeMatchesByTeams();

    const datahomeMatches = homeMatchesByTeams.map((team) => {
      const totalGames = team.homeMatches.length;
      const results = LeaderboardService.getResults(team.homeMatches, []);
      const goalsInfo = LeaderboardService.getGoalsInfo(team.homeMatches, true);

      const finalDataHomeMatches = LeaderboardService
        .getFormatedData(results, goalsInfo, totalGames);

      return {
        name: team.name,
        totalPoints: LeaderboardService.getTotalPoints(results),
        totalGames,
        ...finalDataHomeMatches,
      };
    });

    return datahomeMatches;
  }

  private static async getDataAwayMatchesByTeams() {
    const allTeamsData = await TeamsService.getAllTeams();
    const allMatchesData = await MatchesService.getAllMatches();
    const awayMatchesByTeams = allTeamsData.map((team) => {
      const awayGames = allMatchesData.filter((match) => {
        const vaildEntrance = match.awayTeam === team.id && !match.inProgress;
        return vaildEntrance;
      });
      return { name: team.teamName, awayMatches: [...awayGames] };
    });
    return awayMatchesByTeams;
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

  private static getResults(homeMatches: Array<IMatch>, awayMatches: Array<IMatch>): IResults {
    let totalVictories = 0;
    let totalDraws = 0;
    let totalLosses = 0;
    homeMatches.forEach((match) => {
      if (match.homeTeamGoals > match.awayTeamGoals) { totalVictories += 1; }
      if (match.homeTeamGoals === match.awayTeamGoals) { totalDraws += 1; }
      if (match.homeTeamGoals < match.awayTeamGoals) { totalLosses += 1; }
    });

    awayMatches.forEach((match) => {
      if (match.homeTeamGoals < match.awayTeamGoals) { totalVictories += 1; }
      if (match.homeTeamGoals === match.awayTeamGoals) { totalDraws += 1; }
      if (match.homeTeamGoals > match.awayTeamGoals) { totalLosses += 1; }
    });

    return { totalVictories, totalDraws, totalLosses };
  }

  private static getGoalsInfo(matches: Array<IMatch>, isHome: boolean): IGoalsInfo {
    let goalsFavor = 0;
    let goalsOwn = 0;

    const homeList:Array<number> = matches.map((match) => match.homeTeamGoals);
    const awayList:Array<number> = matches.map((match) => match.awayTeamGoals);

    const testHomeAway = Boolean(homeList.length && awayList.length);

    if (isHome && testHomeAway) {
      goalsFavor = matches.map((match) => match.homeTeamGoals).reduce((total, num) => total + num);
      goalsOwn = matches.map((match) => match.awayTeamGoals).reduce((total, num) => total + num);
    }

    if (!isHome && testHomeAway) {
      goalsFavor = matches.map((match) => match.awayTeamGoals).reduce((total, num) => total + num);
      goalsOwn = matches.map((match) => match.homeTeamGoals).reduce((total, num) => total + num);
    }

    return {
      goalsFavor,
      goalsOwn,
      goalsBalance: goalsFavor - goalsOwn,
    };
  }

  private static getTotalPoints(results: IResults): number {
    const { totalVictories, totalDraws } = results;

    return (totalVictories * 3) + totalDraws;
  }

  private static getFormatedData(results: IResults, goalsInfo: IGoalsInfo, totalGames: number) {
    const { totalVictories, totalDraws, totalLosses } = results;
    const { goalsFavor, goalsOwn, goalsBalance } = goalsInfo;
    const points = LeaderboardService.getTotalPoints(results);
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

  public static sortLeaderboard(a: ILeaderboard, b: ILeaderboard) {
    let orderCritery = b.totalPoints - a.totalPoints;
    if (orderCritery === 0) {
      orderCritery = b.goalsBalance - a.goalsBalance;
    }
    if (orderCritery === 0) {
      orderCritery = b.goalsFavor - a.goalsFavor;
    }
    if (orderCritery === 0) {
      orderCritery = a.goalsOwn - b.goalsOwn;
    }
    return orderCritery;
  }
}

export default LeaderboardService;
