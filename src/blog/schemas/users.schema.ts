// import * as mongoose from 'mongoose';

// export const BlogSchema = new mongoose.Schema({
//     id: Number,
//     firstName: String,
//     lastName: String,
//     emailId: String,
// })


import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String, 
})