export class ErrorHandler {
  constructor() {}

  wrapError(error, publicResponse, severity) {
    const errObj = {
      originalError: error,
      publicResponse,
      severity,
    };

    if (severity < 5) {
      this.handleWarning('warning', severity);
    } else {
      this.handleError('warning', severity);
    }
  }

  handleError(msg, severity) {
    console.error(msg, severity);
  }

  handleWarning(msg, severity) {
    console.warn(msg, severity);
  }
}

export class ErrorLogger {
  private _endPoint = 'api/logger';
  constructor(private _httplClient) {}

  logger(errorObject): Promise<any> {
    return this._httplClient.post(this._endPoint, errorObject);
  }
}

export class ErrorHandlerwithLogger extends ErrorHandler {
  private _logger: ErrorLogger;
  constructor(logger: ErrorLogger) {
    super();
    this._logger = logger;
  }

  wrapError(error, publicResponse, severity) {
    return this._logger.logger(error).then(() => {
      super.wrapError(error, publicResponse, severity);
    });
  }
}
