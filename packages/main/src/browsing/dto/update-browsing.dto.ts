import { PartialType } from '@nestjs/mapped-types'
import { CreateBrowsingDto } from './create-browsing.dto'

export class UpdateBrowsingDto extends PartialType(CreateBrowsingDto) {
  id: number
}
