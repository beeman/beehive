import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
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
  course(@Args('id') id: string) {
    return this.service.course(id)
  }

  @Mutation(() => Course, { nullable: true })
  createCourse(@Args('input') input: CreateCourseInput) {
    return this.service.createCourse(input)
  }

  @Mutation(() => Course, { nullable: true })
  updateCourse(@Args('id') id: string, @Args('input') input: UpdateCourseInput) {
    return this.service.updateCourse(id, input)
  }

  @Mutation(() => Boolean, { nullable: true })
  deleteCourse(@Args('id') id: string) {
    return this.service.deleteCourse(id)
  }
}
