export interface IConfiguration {
  port: number;
  appVersion: string;
  database: {
    host: string;
    user: string;
    name: string;
    port: number;
  },
  jwtSecret: string,
  jwtValidTime: number,
  google: {
    clientId: string;
    secret: string;
    callbackUrl: string
  }
}