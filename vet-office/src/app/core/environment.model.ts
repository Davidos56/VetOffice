export interface EnvironmentConfig {
  production: boolean;
  defaultAPIEndpoint: string;
  defaultAddress: string;
  defaultSmsNumber: string;
  defaultSmsMessage: string;
  defaultCallNumber: string;
  defaultApiEndpointConfig: ApiEndpointsConfig;
}

export interface ApiEndpointsConfig{
  googleMapsEndpoint: string
  googleReviewEndpoint: string
  facebookPostsEndpoint: string
}