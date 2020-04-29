import { Module } from '@nestjs/common';
import { NoteBookController } from './note-book.controller';
import { NoteBookService } from './note-book.service';

@Module({
  controllers: [NoteBookController],
  providers: [NoteBookService]
})
export class NoteBookModule {}
