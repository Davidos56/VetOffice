import { environment } from '../../environments/environment';

export class AppConfig {
  static readonly isProd = environment.production;
  static readonly defaulAPIEndpoint = environment.defaultAPIEndpoint;
  static readonly defaultApiEndpointConfig = environment.defaultApiEndpointConfig;
}