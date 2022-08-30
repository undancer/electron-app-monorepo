import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { BrowsingService } from './browsing.service'
import { CreateBrowsingDto } from './dto/create-browsing.dto'
import { UpdateBrowsingDto } from './dto/update-browsing.dto'

@Controller()
export class BrowsingController {
  constructor(private readonly browsingService: BrowsingService) {}

  @MessagePattern('createBrowsing')
  create(@Payload() createBrowsingDto: CreateBrowsingDto) {
    return this.browsingService.create(createBrowsingDto)
  }

  @MessagePattern('findAllBrowsing')
  findAll() {
    return this.browsingService.findAll()
  }

  @MessagePattern('findOneBrowsing')
  findOne(@Payload() id: number) {
    return this.browsingService.findOne(id)
  }

  @MessagePattern('updateBrowsing')
  update(@Payload() updateBrowsingDto: UpdateBrowsingDto) {
    return this.browsingService.update(updateBrowsingDto.id, updateBrowsingDto)
  }

  @MessagePattern('removeBrowsing')
  remove(@Payload() id: number) {
    return this.browsingService.remove(id)
  }
}
