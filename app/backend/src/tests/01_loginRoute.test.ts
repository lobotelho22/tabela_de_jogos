import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import UserModel from '../database/models/Users.model';
import { correctDataRequestMock, incorrectDataRequestMock, loginMockData, noEmailRequestMock, noPassRequestMock, roleOk, validTokenReturn } from './mocks/Login.mocks';
import LoginService from '../database/services/Login.service';
import { ALL_FIELDS_MUST_BE_FILLED, INCORRECT_EMAIL_OR_PASSWORD } from '../utils/globalConstants';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testa o endpoint /login', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon
    .stub(UserModel, "findOne")
    .resolves({
      ...loginMockData
    } as UserModel);
  });

  after(()=>{
    sinon.restore();
  })

  it('1. A o endpoint existe e é uma rota do tipo post', async () => {
    chaiHttpResponse = await chai.request(app).post('/login');

    expect(chaiHttpResponse.status).to.be.equal(400);
  });

  it('2. Não é possível fazer login sem informar uma senha', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(noPassRequestMock);

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal(ALL_FIELDS_MUST_BE_FILLED);
  });

  it('3. Não é possível fazer login sem informar um email', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(noEmailRequestMock);

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal(ALL_FIELDS_MUST_BE_FILLED);
  });

  it('4. Com os dados válidos, o acesso é permitido', async () => {

    chaiHttpResponse = await chai.request(app).post('/login').send(correctDataRequestMock)
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).have.property('token');
  })

  it('5. Aceso negado caso os dados sejam inválidos', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(incorrectDataRequestMock)
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal(INCORRECT_EMAIL_OR_PASSWORD);
  })

  it('6. Verifica a existência do endpoint /login/validate e que ele retorna o role do usuário', async () => {
    sinon.stub(LoginService, 'loginValidate').resolves(validTokenReturn)

    chaiHttpResponse = await chai.request(app).get('/login/validate')
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(roleOk)
  })
})

