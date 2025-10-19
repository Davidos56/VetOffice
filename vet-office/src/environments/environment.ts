import { ApiEndpointsConfig, EnvironmentConfig } from '../app/core/environment.model';

export const apiEndpointConfig: ApiEndpointsConfig = {
  googleMapsEndpoint: 'gbi/v1/maps',
  googleBasicEndpoint: 'gbi/v1/basic',
  facebookPostsEndpoint: 'fb-sync/v1/posts'
}

export const environment : EnvironmentConfig= {
  production: false,
  defaultAPIEndpoint:"https://serwer2569134.home.pl/cms/wp-json/",
  defaultApiEndpointConfig: apiEndpointConfig
};


