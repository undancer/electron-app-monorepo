import { Module } from '@nestjs/common'
import { ConfigModule } from '@main/config/config.module'
import { WindowService } from '@main/window/window.service'
import { WindowController } from '@main/window/window.controller'

// @Global()
@Module({
  imports: [ConfigModule],
  controllers: [WindowController],
  providers: [WindowService],
  exports: [WindowService],
})
export class WindowModule {}
