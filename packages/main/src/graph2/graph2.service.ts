import { Injectable } from '@nestjs/common'
import { CreateGraph2Input } from './dto/create-graph2.input'
import { UpdateGraph2Input } from './dto/update-graph2.input'

@Injectable()
export class Graph2Service {
  create(createGraph2Input: CreateGraph2Input) {
    return 'This action adds a new graph2'
  }

  findAll() {
    return 'This action returns all graph2'
  }

  findOne(id: number) {
    return `This action returns a #${id} graph2`
  }

  update(id: number, updateGraph2Input: UpdateGraph2Input) {
    return `This action updates a #${id} graph2`
  }

  remove(id: number) {
    return `This action removes a #${id} graph2`
  }
}
