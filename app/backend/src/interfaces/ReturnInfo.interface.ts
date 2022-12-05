import IMatch from './Match.interface';

interface IReturnInfo {
  statusCode: number;
  message: {
    message?: string,
    token?: string,
    role?: string,
    newMatch?: IMatch,
  };
}

export default IReturnInfo;
