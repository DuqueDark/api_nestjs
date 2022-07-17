import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GamesModule } from './games/games.module';
import { Db } from './db';

@Module({
  imports: [GamesModule],
  controllers: [AppController],
  providers: [Db],
})
export class AppModule {}
