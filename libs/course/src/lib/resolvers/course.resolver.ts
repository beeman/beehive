import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { CtxUser, GqlAuthGuard, User } from '@beehive/auth'
import { CourseService } from '../course.service'
import { UpdateCourseInput } from '../dto/update-course.input'
import { Course } from '../models/course'
import { CreateCourseInput } from '../dto/create-course.input'

@Resolver()
export class CourseResolver {
  constructor(private readonly service: CourseService) {}

  @Query(() => [Course], { nullable: true })
  courses() {
    return this.service.courses()
  }

  @Query(() => Course, { nullable: true })
  course(@Args('id') id: number) {
    return this.service.course(id)
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Course, { nullable: true })
  createCourse(@CtxUser() user: User, @Args('input') input: CreateCourseInput) {
    return this.service.createCourse(user.id, input)
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Course, { nullable: true })
  updateCourse(@CtxUser() user: User, @Args('id') id: number, @Args('input') input: UpdateCourseInput) {
    return this.service.updateCourse(user.id, id, input)
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean, { nullable: true })
  deleteCourse(@CtxUser() user: User, @Args('id') id: number) {
    return this.service.deleteCourse(user.id, id)
  }
}
