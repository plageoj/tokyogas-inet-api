import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Event} from './event.model';

@model({settings: {strict: false}})
export class Stamp extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  stampedAt: string;

  // Define well-known properties here

  @belongsTo(() => Event) eventId: string;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Stamp>) {
    super(data);
  }
}

export interface StampRelations {
  // describe navigational properties here
}

export type StampWithRelations = Stamp & StampRelations;
