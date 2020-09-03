import { DataModule } from '@beehive/data'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    DataModule,
    JwtModule.register({
      secret: 'BEEHIVE-SECRET-987-?',
    }),
  ],
  controllers: [],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports: [],
})
export class AuthModule {}
