import { GqlAuthGuard } from '@beehive/auth'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { CourseService } from '../course.service'
import { CreateLessonInput } from '../dto/create-lesson.input'
import { UpdateLessonInput } from '../dto/update-lesson.input'
import { Lesson } from '../models/lesson'

@Resolver()
@UseGuards(GqlAuthGuard)
export class LessonResolver {
  constructor(private readonly service: CourseService) {}

  @Mutation(() => Lesson, { nullable: true })
  createLesson(@Args('courseId') courseId: number, @Args('input') input: CreateLessonInput) {
    return this.service.createLesson(courseId, input)
  }

  @Mutation(() => Lesson, { nullable: true })
  updateLesson(@Args('lessonId') lessonId: number, @Args('input') input: UpdateLessonInput) {
    return this.service.updateLesson(lessonId, input)
  }

  @Mutation(() => Boolean, { nullable: true })
  deleteLesson(@Args('lessonId') lessonId: number) {
    return this.service.deleteLesson(lessonId)
  }
}
