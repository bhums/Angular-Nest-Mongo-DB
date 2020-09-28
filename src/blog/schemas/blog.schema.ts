// import * as mongoose from 'mongoose';

// export const BlogSchema = new mongoose.Schema({
//     id: Number,
//     firstName: String,
//     lastName: String,
//     emailId: String,
// })


import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String
})