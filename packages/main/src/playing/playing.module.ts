import { Module } from '@nestjs/common'
import { PlayingService } from './playing.service'
import { PlayingController } from './playing.controller'

@Module({
  controllers: [PlayingController],
  providers: [PlayingService],
})
export class PlayingModule {}
