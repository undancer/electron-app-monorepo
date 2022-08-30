import { Controller } from '@nestjs/common'
// import { MessagePattern, Payload } from '@nestjs/microservices'
import { ConfigService } from './config.service'
// import { CreateConfigDto } from './dto/create-config.dto'
// import { UpdateConfigDto } from './dto/update-config.dto'

@Controller()
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  // @MessagePattern('createConfig')
  // create(@Payload() createConfigDto: CreateConfigDto) {
  //   return this.configService.create(createConfigDto)
  // }
  //
  // @MessagePattern('findAllConfig')
  // findAll() {
  //   return this.configService.findAll()
  // }
  //
  // @MessagePattern('findOneConfig')
  // findOne(@Payload() id: number) {
  //   return this.configService.findOne(id)
  // }
  //
  // @MessagePattern('updateConfig')
  // update(@Payload() updateConfigDto: UpdateConfigDto) {
  //   return this.configService.update(updateConfigDto.id, updateConfigDto)
  // }
  //
  // @MessagePattern('removeConfig')
  // remove(@Payload() id: number) {
  //   return this.configService.remove(id)
  // }
}
