
// import { USERS } from './../mocks/users.mocks';
import { Injectable, HttpException} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './../blog/interfaces/user.interface';
import { CreateUserDTO } from './../blog/dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {

    }
   
    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
    }
    async getUser(userID): Promise<User> {
        const user = await this.userModel
            .findById(userID)
            .exec();
        return user;
    }

    async addUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = await this.userModel(createUserDTO);
        return newUser.save();
    }
    
    async deleteUser(userID): Promise<any> {
        const deletedUser = await this.userModel
            .findByIdAndRemove(userID);
        return deletedUser;
    }

    async updateUser(userID, createUserDTO: CreateUserDTO): Promise<User> {
        const editedUser = await this.userModel
            .findByIdAndUpdate(userID, createUserDTO, { new: true });
        return editedUser;
    }
    //  updateUser(userID, user): Promise<any> {
    //     return new Promise(resolve => {
    //       this.users.forEach((element) => {
    //           if (element.id == userID) {
    //             element.id= parseInt(user.id);
    //             element.firstName = user.firstName;
    //             element.lastName  = user.lastName;
    //           }  else {
    //               console.log("correct the user id");
    //           }
    //       });
    //       resolve(this.users); 
    // });
    // }
    // addUser(user): Promise<any> {
        
    //     return new Promise(resolve => {
    //         let index = this.users.some(currentUser => currentUser.id === user.id);
    //         if (index) {
    //             throw new HttpException('User already there!', 404);
    //         } else {
    //             if(user.id) {
    //                 user.id = parseInt(user.id);
    //             }
    //             this.users.push(user);
    //             resolve(this.users);
    //         }      
    //     });
    // }
    
    // deleteUser(userID): Promise<any> {
    //     let id = Number(userID);
    
    //     return new Promise(resolve => {
    //         let index = this.users.findIndex(user => user.id === id);
    //         if (index === -1) {
    //             throw new HttpException('User does not exist!', 404);
    //         }
         
    //         this.users.splice(index, 1);
          
    //         resolve(this.users);
    //     });
    // }
    // public users=  USERS;

    // getUsers(): Promise<any> {
    //     return new Promise(resolve => {
    //         resolve(this.users);
    //     });
    // }
    // getUser(userID): Promise<any> {
    //     let id = Number(userID);
    //     return new Promise(resolve => {
    //         const user = this.users.find(user => user.id === id);
    //         if (!user) {
    //             throw new HttpException('User does not exist!', 404);
    //         }
    //         resolve(user);
    //     });
    // }
}
