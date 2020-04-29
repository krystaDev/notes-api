import { IConfiguration } from './configuration.interface';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  appVersion: process.env.VERSION,
  database: {
    host: process.env.TYPEORM_HOST,
    user: process.env.TYPEORM_USERNAME,
    name: process.env.TYPEORM_DATABASE,
    password: process.env.TYPEORM_PASSWORD,
    port: parseInt(process.env.TYPEORM_PORT, 10) || 3306
  },
  jwtSecret: process.env.JWT_SECRET_TOKEN,
  jwtValidTime: parseInt(process.env.JWT_VALID_TIME, 10) || 3600,
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    secret: process.env.GOOGLE_SECRET,
    callbackUrl: process.env.GOOGLE_CALLBACKURL
  }
}) as IConfiguration;

