import { Injectable } from "@nestjs/common";
import { User } from "./users.interface";

@Injectable()
export class UsersService {
  private users: User[] = [];
  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }
}
