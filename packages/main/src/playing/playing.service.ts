import { Injectable } from '@nestjs/common'
import { CreatePlayingDto } from './dto/create-playing.dto'
import { UpdatePlayingDto } from './dto/update-playing.dto'

@Injectable()
export class PlayingService {
  create(createPlayingDto: CreatePlayingDto) {
    return 'This action adds a new playing'
  }

  findAll() {
    return 'This action returns all playing'
  }

  findOne(id: number) {
    return `This action returns a #${id} playing`
  }

  update(id: number, updatePlayingDto: UpdatePlayingDto) {
    return `This action updates a #${id} playing`
  }

  remove(id: number) {
    return `This action removes a #${id} playing`
  }
}
