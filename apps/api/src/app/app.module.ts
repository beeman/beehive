import { CoreModule } from '@beehive/core'
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
