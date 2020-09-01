import { Injectable } from '@nestjs/common'
import { CreateCourseInput } from './dto/create-course.input'
import { UpdateCourseInput } from './dto/update-course.input'
import { Course } from './models/course'

@Injectable()
export class CourseService {
  items: Course[] = [
    { id: 'intro-to-graphql', title: 'Introduction to GraphQL' },
    { id: 'graphql-for-experts', title: 'GraphQL for Exports' },
  ]

  public courses() {
    return this.items
  }

  public course(id: string) {
    return this.items.find((item) => item.id === id)
  }

  public createCourse(input: CreateCourseInput) {
    const newCourse: Course = {
      id: Date.now().toString(),
      ...input,
    }
    this.items.push(newCourse)
    return newCourse
  }

  public updateCourse(id: string, input: UpdateCourseInput) {
    const course = this.course(id)
    const updated: Course = {
      ...course,
      ...input,
    }
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return updated
      }
      return item
    })

    return updated
  }

  public deleteCourse(id: string) {
    const course = this.course(id)
    if (!course) {
      return false
    }
    this.items = this.items.filter((item) => item.id !== id)
    return true
  }
}
