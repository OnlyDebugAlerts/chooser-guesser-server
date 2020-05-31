import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import moment = require("moment");

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findOne(email: string): Promise<User | undefined> {
        return await this.userRepository.findOne({ where: { email } });
    }

    async createUser(user): Promise<User | undefined> {
        user.role = 'USER';
        user.createdDate = moment().format();
        return await this.userRepository.save(user);
    }
}
