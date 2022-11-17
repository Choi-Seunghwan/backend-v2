import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Watch, WatchSchema } from './schema/watch.schema';
import { WatchesController } from './watches.controller';
import { WatchesService } from './watches.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Watch.name, schema: WatchSchema }]),
  ],
  controllers: [WatchesController],
  providers: [WatchesService],
})
export class WatchesModule {}
