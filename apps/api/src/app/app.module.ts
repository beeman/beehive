import { CoreModule } from '@beehive/core'
import { CourseModule } from '@beehive/course'
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [CoreModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
