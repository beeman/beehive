import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field({ nullable: true })
  id?: number

  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string

  password?: string
}
