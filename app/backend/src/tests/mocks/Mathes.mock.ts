const matchesDataMock = [
  {
    dataValues: {
      id: 1,
      homeTeam: 16,
      homeTeamGoals: 1,
      awayTeam: 8,
      awayTeamGoals: 1,
      inProgress: false,
      home_team: { id: 16, teamName: "São Paulo" },
      away_team: { id: 8, teamName: "Grêmio" },
    },
  },
  {
    dataValues: {
      id: 2,
      homeTeam: 13,
      homeTeamGoals: 3,
      awayTeam: 9,
      awayTeamGoals: 1,
      inProgress: false,
      home_team: { id: 13, teamName: "Flamengo" },
      away_team: { id: 9, teamName: "Internacional" },
    },
  },
];

const allMatchesMock = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: { teamName: 'São Paulo' },
    teamAway: { teamName: 'Grêmio' }
  },
  {
    id: 2,
    homeTeam: 13,
    homeTeamGoals: 3,
    awayTeam: 9,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: { teamName: 'Flamengo' },
    teamAway: { teamName: 'Internacional' }
  }
]

export { matchesDataMock, allMatchesMock };
