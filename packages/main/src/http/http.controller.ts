import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { HttpService } from './http.service'
import { CreateHttpDto } from './dto/create-http.dto'
import { UpdateHttpDto } from './dto/update-http.dto'

@Controller('http')
export class HttpController {
  constructor(private readonly httpService: HttpService) {}

  @Post()
  create(@Body() createHttpDto: CreateHttpDto) {
    return this.httpService.create(createHttpDto)
  }

  @Get()
  findAll() {
    return this.httpService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.httpService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHttpDto: UpdateHttpDto) {
    return this.httpService.update(+id, updateHttpDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.httpService.remove(+id)
  }
}
