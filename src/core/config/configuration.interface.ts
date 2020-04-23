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
  google: {
    clientId: string;
    secret: string;
    callbackUrl: string
  }
}