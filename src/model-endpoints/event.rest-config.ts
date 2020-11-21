import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Event} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Event,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/events',
};
module.exports = config;
