import { Module } from '@nestjs/common'
import { BrowsingService } from './browsing.service'
import { BrowsingController } from './browsing.controller'

@Module({
  controllers: [BrowsingController],
  providers: [BrowsingService],
})
export class BrowsingModule {}
