import { Module } from '@nestjs/common'
import { AppController } from '@main/app.controller'
import { AppService } from '@main/app.service'
import { EventModule } from '@main/event/event.module'
import { WindowModule } from '@main/window/window.module'
import { ConfigModule } from '@main/config/config.module'
// import { SocketModule } from './socket/socket.module'
// import { GraphModule } from './graph/graph.module'
// import { Graph2Module } from './graph2/graph2.module'
// import { HttpModule } from './http/http.module'
import { MenuModule } from '@main/menu/menu.module'
import { ShortcutModule } from '@main/shortcut/shortcut.module'
import { BrowsingModule } from '@main/browsing/browsing.module'
import { PlayingModule } from '@main/playing/playing.module'
import { UpdateModule } from '@main/update/update.module'

@Module({
  imports: [
    EventModule,
    ConfigModule,
    UpdateModule,
    ShortcutModule,
    MenuModule,
    WindowModule,
    BrowsingModule,
    PlayingModule,
    // HttpModule,
    // MenuModule,
    // SocketModule,
    // GraphModule,
    // Graph2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
