// export class CreatePostDTO {
//     readonly id: string;
//     readonly firstName: string;
//     readonly lastName: string;
//     readonly emailId: string;
// }

export class CreatePostDTO {
    readonly title: string;
    readonly description: string;
    readonly body: string;
    readonly author: string;
    readonly date_posted: string
}