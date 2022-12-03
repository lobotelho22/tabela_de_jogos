import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import UserModel from '../database/models/Users';
import { correctDataRequestMock, loginMockData, noEmailRequestMock, noPassRequestMock } from './mocks/Login.mocks';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testa a rota /login', () => {

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

  it('1. A rota login existe e é do tipo post', async () => {
    chaiHttpResponse = await chai.request(app).post('/login');

    expect(chaiHttpResponse.status).to.be.equal(400);
  });

  it('2. Não é possível fazer login sem informar uma senha', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(noPassRequestMock);

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('3. Não é possível fazer login sem informar um email', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(noEmailRequestMock);

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
  });

  // it('4. Com os dados válidos, o acesso é permitido', async () => {
  
  //   const response = async () => {
  //     chaiHttpResponse = await chai.request(app).post('/login').send(correctDataRequestMock)
  //     return chaiHttpResponse
  //   }

  //   await response()
  //     .then(() => {
  //       console.log('aqui')
  //       console.log(chaiHttpResponse.status)
  //       console.log ('aqui');
  //       return expect(chaiHttpResponse.status).to.be.equal(500);
  //     })
  //     .catch((e) => {
  //       return e.message;
  //     })
    
  //   // console.log(response())
  //   // expect(chaiHttpResponse.status).to.be.equal(200);
  // })
})
