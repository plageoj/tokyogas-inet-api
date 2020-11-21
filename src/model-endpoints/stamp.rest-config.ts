import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Stamp} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Stamp,
  pattern: 'CrudRest',
  dataSource: 'mongo',
  basePath: '/stamps',
};
module.exports = config;
