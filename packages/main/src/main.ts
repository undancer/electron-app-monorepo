import { MicroserviceOptions } from '@nestjs/microservices'
import { NestFactory } from '@nestjs/core'
import { ElectronIpcTransport } from '@main/transport'
import { AppModule } from '@main/app.module'
import log from 'electron-log'

// import { AllExceptionsFilter } from '@main/transport/filter'

Object.assign(console, log.functions)
console.log('log ???')

async function bootstrap() {
  const app = await NestFactory
    .createMicroservice<MicroserviceOptions>(AppModule, {
      strategy: new ElectronIpcTransport(),
    })
  // app.useLogger(new AppLogger())

  // app.useGlobalFilters(new AllExceptionsFilter())
  await app.listen()
}

// await
bootstrap().then(() => {})
