import { Provider } from '../../auth/auth.service';

export interface ThirdPartUserInterface {
  email: string;
  provider: Provider
}