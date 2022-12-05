const teamListMock = [
  {
    dataValues: { id: 1, teamName: "Avaí/Kindermann" },
    uniqno: 1,
    isNewRecord: false,
  },
  {
    dataValues: { id: 2, teamName: "Bahia" },
    uniqno: 1,
    isNewRecord: false,
  },
  {
    dataValues: { id: 3, teamName: "Botafogo" },
    uniqno: 1,
    isNewRecord: false,
  },
];

const teamMock = {
  dataValues: { id: 1, teamName: "Avaí/Kindermann" },
  uniqno: 1,
  isNewRecord: false,
}

const teamListOk = [
  { id: 1, teamName: "Avaí/Kindermann" },
  { id: 2, teamName: "Bahia" },
  { id: 3, teamName: "Botafogo" },
];

const infoTeamOk = {
  id: 1,
  teamName: 'Avaí/Kindermann',
}

export {
  teamListMock,
  teamListOk,
  teamMock,
  infoTeamOk
};
