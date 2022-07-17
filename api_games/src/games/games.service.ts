import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaClient) {}

  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }

  findAll() {
    return `This action returns all games`;
  }

  async findOne(id: number): Promise<Game | null> {
    const result = await this.prisma.game.findUnique({
      where: {
        id: id,
      },
    });

    if (result != null) {
      let game: Game;
      game.id = result.id;
      game.name = result.name;
      game.studio = result.studio;
      game.lucro = result.lucro.toNumber();
      game.precoCompra = result.precoCompra.toNumber();

      return game;
    }
    return null;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
