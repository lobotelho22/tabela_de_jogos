const loginMockData = {
  dataValues: {
    id: 2,
    username: 'User',
    role: 'user',
    email: 'gabigol@mengao.com.br',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'
  }
}


const noPassRequestMock = {
  email: 'batatinha@testando.com.br',
}

const noEmailRequestMock = {
  password: 'mengo',
}

const correctDataRequestMock = {
  email: 'gabigol@mengao.com.br',
  password: 'secret_user',
}

const incorrectDataRequestMock = {
  email: 'gabigol@mengao.com.br',
  password: 'gabigolDoPovo',
}

const validTokenReturn = {
  statusCode: 200,
  message: { role: 'user' },
}

export {
  loginMockData,
  noPassRequestMock,
  noEmailRequestMock,
  correctDataRequestMock,
  incorrectDataRequestMock,
  validTokenReturn,
}