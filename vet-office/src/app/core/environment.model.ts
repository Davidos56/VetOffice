export interface EnvironmentConfig {
  production: boolean;
  defaultAPIEndpoint: string;
  defaultApiEndpointConfig: ApiEndpointsConfig;
}

export interface ApiEndpointsConfig{
  googleMapsEndpoint: string
  googleBasicEndpoint: string
  facebookPostsEndpoint: string
}