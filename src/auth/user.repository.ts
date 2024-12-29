import { DataSource, Repository } from "typeorm";
import { Users } from "./user.entity";
import { Injectable } from "@nestjs/common";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";

@Injectable()
export class UserRepository extends Repository<Users> {
    constructor(private dataSource: DataSource) {
        super(Users, dataSource.createEntityManager());
    }

    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto;
        const user = this.create({
            username,
            password,
        })

        await this.save(user);
    }
} 