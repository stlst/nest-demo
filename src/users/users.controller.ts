import { Controller, Get, Post, Put, Param, Query, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./users.interface";

@Controller("users")
export class UsersController {
  // readonly 关键字: 表示被修饰的对象只能在声明的时候或构造函数中初始化。
  constructor(private readonly usersService: UsersService) {}
  // 等同于
  //   private readonly usersService: UsersService;
  //   constructor(usersService: UsersService) {
  //     this.usersService = usersService;
  //   }

  @Post()
  //data transform object
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
