import { forwardRef, Module } from '@nestjs/common';
import { NoteBookController } from './note-book.controller';
import { NoteBookService } from './note-book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteBook } from './note-book.entity';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [NoteBookController],
  imports: [TypeOrmModule.forFeature([NoteBook]), forwardRef(() => UserModule)],
  providers: [NoteBookService],
  exports: [NoteBookService]
})
export class NoteBookModule {}
