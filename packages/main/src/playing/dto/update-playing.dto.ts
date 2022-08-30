import { PartialType } from '@nestjs/mapped-types'
import { CreatePlayingDto } from './create-playing.dto'

export class UpdatePlayingDto extends PartialType(CreatePlayingDto) {
  id: number
}
