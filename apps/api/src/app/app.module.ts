import { AuthModule } from '@beehive/auth'
import { CoreModule } from '@beehive/core'
import { CourseModule } from '@beehive/course'
import { DataModule } from '@beehive/data'
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [AuthModule, CoreModule, DataModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
