import { environment } from '../../environments/environment';

export class AppConfig {
  static readonly isProd = environment.production;
  static readonly adress = environment.defaultAddress;
  static readonly defaultGoogleAPI = environment.defaultGoogleAPI;
  static readonly defaultSmsNumber = environment.defaultSmsNumber;
  static readonly defaultSmsMessage = environment.defaultSmsMessage;
  static readonly defaultCallNumber = environment.defaultCallNumber;
}