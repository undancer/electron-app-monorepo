import { Injectable } from '@nestjs/common'
import { CreateHttpDto } from './dto/create-http.dto'
import { UpdateHttpDto } from './dto/update-http.dto'

@Injectable()
export class HttpService {
  create(createHttpDto: CreateHttpDto) {
    return 'This action adds a new http'
  }

  findAll() {
    return 'This action returns all http'
  }

  findOne(id: number) {
    return `This action returns a #${id} http`
  }

  update(id: number, updateHttpDto: UpdateHttpDto) {
    return `This action updates a #${id} http`
  }

  remove(id: number) {
    return `This action removes a #${id} http`
  }
}
