import { DataModule } from '@beehive/data'
import { Module } from '@nestjs/common'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [AuthResolver, AuthService],
  exports: [],
})
export class AuthModule {}
