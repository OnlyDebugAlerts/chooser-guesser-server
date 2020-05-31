import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';

import {UserModule} from '../user/user.module';
import {AuthService} from './auth.service';

import {JwtStrategy} from './jwt.strategy';
import {JWT_SECRET} from './auth.constants'
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UserModule,
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false
        }),
        JwtModule.register({
            secret: JWT_SECRET,
            signOptions: {expiresIn: '7d'}
        })
    ],
    providers: [AuthService, JwtStrategy],
    exports: [PassportModule, AuthService],
    controllers: [AuthController]
})
export class AuthModule {
}
