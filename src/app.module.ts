import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { NoteBookModule } from './modules/note-book/note-book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRoot(),
    AuthModule,
    UserModule,
    NoteBookModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
