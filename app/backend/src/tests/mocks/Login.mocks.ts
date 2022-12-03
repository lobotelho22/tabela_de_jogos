const loginMockData = {
  id: 42,
  username: 'gabi',
  role: 'admin',
  email: 'gabigol@mengao.com.br',
  password: 'aos43emlima',
}

const noPassRequestMock = {
  email: 'batatinha@testando.com.br',
}

const noEmailRequestMock = {
  password: 'mengaodamassa',
}

const correctDataRequestMock = {
  email: 'gabigol@mengao.com.br',
  password: 'aos43emlima',
}

export {
  loginMockData,
  noPassRequestMock,
  noEmailRequestMock,
  correctDataRequestMock,
}