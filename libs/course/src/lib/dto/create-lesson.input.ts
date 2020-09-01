import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateLessonInput {
  @Field()
  title: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  content?: string
}
