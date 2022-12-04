interface IReturnInfo {
  statusCode: number;
  message: {
    message?: string,
    token?: string,
    role?: string,
  };
}

export default IReturnInfo;
