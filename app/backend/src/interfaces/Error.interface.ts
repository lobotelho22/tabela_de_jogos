interface IError {
  statusCode: number;
  message: {
    message?: string,
    token?: string,
    role?: string,
  };
}

export default IError;
