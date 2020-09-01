import { Module } from '@nestjs/common'
import { CourseResolver } from './course.resolver'
import { CourseService } from './course.service'

@Module({
  controllers: [],
  providers: [CourseResolver, CourseService],
  exports: [],
})
export class CourseModule {}
