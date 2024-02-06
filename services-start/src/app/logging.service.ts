// @Injectable can be omitted when nothing is injected to this service
export class LoggingService {
  constructor() {}

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
