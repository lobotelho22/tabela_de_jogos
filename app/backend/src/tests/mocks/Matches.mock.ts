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
      inProgress: true,
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
    inProgress: true,
    teamHome: { teamName: 'Flamengo' },
    teamAway: { teamName: 'Internacional' }
  }
]

const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJVc2VyIiwicm9sZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAdXNlci5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCRZOEFiaThqWHZzWHlxbS5ybXAwQi51UUJBNXFVejdUNkdobGcvQ3ZWci9nTHhZajVVQVpWTyIsImlhdCI6MTY3MDE3NzMzMywiZXhwIjoxNjcyNzY5MzMzfQ.psFn0qBCWENNfTxhgGh3G4uRBxNl0vdOFIVt2fUX_wU'

const validateTokenReturnOk = {
  id: 2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
  iat: 1670177333,
  exp: 1672769333
}

const validateTokenFail = 'Erro de autorização';

const equalTeamsBody = {
  homeTeam: 16,
  awayTeam: 16,
  homeTeamGoals: 2,
  awayTeamGoals: 2
}

const invalidTeamBody = {
  homeTeam: 161,
  awayTeam: 16,
  homeTeamGoals: 2,
  awayTeamGoals: 2
}

const teamBodyOk = {
  homeTeam: 13,
  awayTeam: 16,
  homeTeamGoals: 2,
  awayTeamGoals: 2
}

const invalidIdReturn = {
  statusCode: 400,
  message: { message: 'Incorrect team id' },
}

export { matchesDataMock,
  allMatchesMock,
  validToken,
  validateTokenReturnOk,
  validateTokenFail,
  equalTeamsBody,
  invalidTeamBody,
  invalidIdReturn,
  teamBodyOk,
};
