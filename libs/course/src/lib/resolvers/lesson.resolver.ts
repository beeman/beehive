import { CtxUser, GqlAuthGuard, User } from '@beehive/auth'
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
  createLesson(@CtxUser() user: User, @Args('courseId') courseId: number, @Args('input') input: CreateLessonInput) {
    return this.service.createLesson(user.id, courseId, input)
  }

  @Mutation(() => Lesson, { nullable: true })
  updateLesson(@CtxUser() user: User, @Args('lessonId') lessonId: number, @Args('input') input: UpdateLessonInput) {
    return this.service.updateLesson(user.id, lessonId, input)
  }

  @Mutation(() => Boolean, { nullable: true })
  deleteLesson(@CtxUser() user: User, @Args('lessonId') lessonId: number) {
    return this.service.deleteLesson(user.id, lessonId)
  }
}
