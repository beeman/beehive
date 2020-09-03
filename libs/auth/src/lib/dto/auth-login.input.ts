import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AuthLoginInput {
  @Field()
  email: string

  @Field()
  password: string
}
