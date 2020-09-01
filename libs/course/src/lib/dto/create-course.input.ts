import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateCourseInput {
  @Field()
  title: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  imageUrl?: string
}
