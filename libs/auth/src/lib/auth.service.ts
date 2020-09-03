import { DataService } from '@beehive/data'
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { AuthHelper } from './auth.helper'
import { AuthLoginInput } from './dto/auth-login.input'
import { AuthRegisterInput } from './dto/auth-register.input'
import { UserToken } from './models/user-token'

@Injectable()
export class AuthService {
  constructor(private readonly data: DataService) {}

  public async login(input: AuthLoginInput): Promise<UserToken> {
    const found = await this.data.findUserByEmail(input.email)

    if (!found) {
      throw new NotFoundException(`User with email ${input.email} does not exist`)
    }

    const passwordValid = await AuthHelper.validate(input.password, found.password)

    if (!passwordValid) {
      throw new Error(`Invalid password`)
    }

    return { user: found, token: this.signToken(found.id) }
  }

  public async register(input: AuthRegisterInput): Promise<UserToken> {
    // Make sure that we have user with that email already
    const found = await this.data.findUserByEmail(input.email)

    if (found) {
      throw new BadRequestException(`Cannot register with email ${input.email}`)
    }

    const password = await AuthHelper.hash(input.password)
    const created = await this.data.user.create({
      data: {
        ...input,
        password,
      },
    })

    return { user: created, token: this.signToken(created.id) }
  }

  private signToken(id: number) {
    return ' TEMP TOKEN FOR ID ' + id
  }
}
