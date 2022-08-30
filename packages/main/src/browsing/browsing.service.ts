import { Injectable } from '@nestjs/common'
import { CreateBrowsingDto } from './dto/create-browsing.dto'
import { UpdateBrowsingDto } from './dto/update-browsing.dto'

@Injectable()
export class BrowsingService {
  create(createBrowsingDto: CreateBrowsingDto) {
    return 'This action adds a new browsing'
  }

  findAll() {
    return 'This action returns all browsing'
  }

  findOne(id: number) {
    return `This action returns a #${id} browsing`
  }

  update(id: number, updateBrowsingDto: UpdateBrowsingDto) {
    return `This action updates a #${id} browsing`
  }

  remove(id: number) {
    return `This action removes a #${id} browsing`
  }
}
