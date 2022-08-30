import { Module } from '@nestjs/common'
import { WindowModule } from '../window/window.module'
import { ShortcutService } from './shortcut.service'

@Module({
  imports: [WindowModule],
  providers: [ShortcutService],
  exports: [ShortcutService],
})
export class ShortcutModule {}
