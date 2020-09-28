import { BlogModule } from './blog/blog.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/nest-users', { useNewUrlParser: true }),
   BlogModule, MongooseModule.forRoot('mongodb://localhost/nest-blog', { useNewUrlParser: true })],

  controllers: [],
  providers: [],
})
export class AppModule {}
