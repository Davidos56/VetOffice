import { EnvironmentConfig } from '../app/core/environment.model';

export const environment : EnvironmentConfig= {
  production: false,
  defaultGoogleAPI: "https://gabinetbrzescy.pl/cms/wp-json/grm/v1/reviews",
  defaultAddress: "Spółdzielców 12a, 72-006 Mierzyn",
  defaultSmsNumber: '+1234567890',
  defaultSmsMessage: 'Hello from Angular!',
  defaultCallNumber: '+1234567890'
};