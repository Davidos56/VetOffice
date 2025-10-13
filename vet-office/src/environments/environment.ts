import { ApiEndpointsConfig, EnvironmentConfig } from '../app/core/environment.model';

export const apiEndpointConfig: ApiEndpointsConfig = {
  googleMapsEndpoint: 'maps/v1/cache',
  googleReviewEndpoint: 'grm/v1/reviews',
  facebookPostsEndpoint: 'fb-sync/v1/posts'
}

export const environment : EnvironmentConfig= {
  production: false,
 
  defaultAPIEndpoint:"https://serwer2569134.home.pl/cms/wp-json/",
  defaultAddress: "Spółdzielców 12a, 72-006 Mierzyn",
  defaultSmsNumber: '+1234567890',
  defaultSmsMessage: 'Hello from Angular!',
  defaultCallNumber: '+1234567890',
  defaultApiEndpointConfig: apiEndpointConfig
};


