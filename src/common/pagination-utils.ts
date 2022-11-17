import { Document, model, Model, Query } from 'mongoose';
import { PaginationParams } from './pagination-params';

export const pagination = (modelQuery, params: PaginationParams) => {
  const { limit = 0, skip = 0 } = params;

  if (limit) modelQuery.limit();
  if (skip) modelQuery.skip();
};
