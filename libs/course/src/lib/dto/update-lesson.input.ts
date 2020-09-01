import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateLessonInput {
  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  content?: string
}
