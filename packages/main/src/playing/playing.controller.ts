import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { PlayingService } from './playing.service'
import { CreatePlayingDto } from './dto/create-playing.dto'
import { UpdatePlayingDto } from './dto/update-playing.dto'

@Controller()
export class PlayingController {
  constructor(private readonly playingService: PlayingService) {}

  @MessagePattern('createPlaying')
  create(@Payload() createPlayingDto: CreatePlayingDto) {
    return this.playingService.create(createPlayingDto)
  }

  @MessagePattern('findAllPlaying')
  findAll() {
    return this.playingService.findAll()
  }

  @MessagePattern('findOnePlaying')
  findOne(@Payload() id: number) {
    return this.playingService.findOne(id)
  }

  @MessagePattern('updatePlaying')
  update(@Payload() updatePlayingDto: UpdatePlayingDto) {
    return this.playingService.update(updatePlayingDto.id, updatePlayingDto)
  }

  @MessagePattern('removePlaying')
  remove(@Payload() id: number) {
    return this.playingService.remove(id)
  }
}
