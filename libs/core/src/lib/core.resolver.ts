import { Float, Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class CoreResolver {
  @Query(() => Float)
  uptime() {
    return process.uptime()
  }
}
