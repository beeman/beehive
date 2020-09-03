import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AuthRegisterInput {
  @Field()
  email: string

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string

  @Field()
  password: string
}
