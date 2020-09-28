import { ValidateObjectId } from './../blog/shared/pipes/validate-object-id.pipes';
import { ValidationPipe } from './validation.pipe';
import { Controller, Res, Get, Param, Post, Body, Query, Delete, Put, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './create.user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {

    }
    @Get()
    async getUsers(@Res() res) {
        const fetchUsers = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json(fetchUsers);
    }

    @Get(':userID')
    async getUser(@Res() res, @Param('userID', new ValidateObjectId()) userID) {
        const user = await this.userService.getUser(userID);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json(user);
    }

    @Post('/post')
    async addUser(@Res() res, @Body() createUserDto:CreateUserDTO) {
        const newUser = await this.userService.addUser(createUserDto);
        return res.status(HttpStatus.OK).json({
            message: "User has been saved successfully!",
            post: newUser
        })
    }

    @Put('/edit')
        async editUser(
            @Res() res, 
            @Body() createUserDto: CreateUserDTO,
            @Query('userID', new ValidateObjectId()) userID,
            ) {
             const editUser = await this.userService.updateUser(userID, createUserDto);
             if (!editUser) throw new NotFoundException('User does not exist!');
             return res.status(HttpStatus.OK).json({
                 message: 'User has been successfully updated',
                 post: editUser
             })
    }

    @Delete('/delete')
    async deleteUser(
        @Res() res,
         @Query('userID', new ValidateObjectId()) userID
        ) {
        const deleteUsers = await this.userService.deleteUser(userID);
        if (!deleteUsers) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User has been deleted!',
            post: deleteUsers
        })
    }
}
