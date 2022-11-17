import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationParams } from 'src/common/pagination-params';
import { pagination } from 'src/common/pagination-utils';
import { Watch, WatchDocument } from './schema/watch.schema';

@Injectable()
export class WatchesService {
  constructor(
    @InjectModel(Watch.name) private watchModel: Model<WatchDocument>,
  ) {}

  async getWatches(
    paginationParams: PaginationParams = null,
  ): Promise<Watch[]> {
    const { skip, limit } = paginationParams;

    const query = this.watchModel.find().populate('author');

    if (skip) query.skip(skip);
    if (limit) query.limit(limit);

    const result = await query;

    return result;
  }
}
