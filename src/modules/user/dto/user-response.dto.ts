import { Provider } from "src/modules/auth/provider.enum";

export interface IUserResponseDto {
  email: string;
  provider: Provider,
  firstName: string,
  lastName: string,
  isActive: boolean,
}