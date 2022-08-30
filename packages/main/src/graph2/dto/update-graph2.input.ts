import { PartialType } from '@nestjs/mapped-types'
import { CreateGraph2Input } from './create-graph2.input'

export class UpdateGraph2Input extends PartialType(CreateGraph2Input) {
  id: number
}
