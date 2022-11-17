import { Controller, Get, Query, Req } from '@nestjs/common';
import { PaginationParams } from 'src/common/pagination-params';
import { Watch } from './schema/watch.schema';
import { WatchesService } from './watches.service';

@Controller('watches')
export class WatchesController {
  constructor(private watchesService: WatchesService) {}

  @Get('/')
  async getWatches(@Query() paginationParams: PaginationParams) {
    const watches: Watch[] = await this.watchesService.getWatches(
      paginationParams,
    );

    return watches;
  }
}
