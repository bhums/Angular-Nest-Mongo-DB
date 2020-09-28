// import { Document } from 'mongoose';

// export interface Post extends Document {
//     readonly id: Number;
//     readonly firstName: string;
//     readonly lastName: string;
//     readonly emailId: string;
// }

import { Document } from 'mongoose';

export interface Post extends Document {
    readonly title: string;
    readonly description: string;
    readonly body: string;
    readonly author: string;
    readonly date_posted: string
}