/* eslint-disable @typescript-eslint/no-explicit-any */
export class ConsoleLogger {
  public log(message?: string, ...optionalParams: any[]) {
    console.log(message, ...optionalParams)
  }
}
