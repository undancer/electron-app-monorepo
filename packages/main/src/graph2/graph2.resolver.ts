import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Graph2Service } from './graph2.service'
import { CreateGraph2Input } from './dto/create-graph2.input'
import { UpdateGraph2Input } from './dto/update-graph2.input'

@Resolver('Graph2')
export class Graph2Resolver {
  constructor(private readonly graph2Service: Graph2Service) {}

  @Mutation('createGraph2')
  create(@Args('createGraph2Input') createGraph2Input: CreateGraph2Input) {
    return this.graph2Service.create(createGraph2Input)
  }

  @Query('graph2')
  findAll() {
    return this.graph2Service.findAll()
  }

  @Query('graph2')
  findOne(@Args('id') id: number) {
    return this.graph2Service.findOne(id)
  }

  @Mutation('updateGraph2')
  update(@Args('updateGraph2Input') updateGraph2Input: UpdateGraph2Input) {
    return this.graph2Service.update(updateGraph2Input.id, updateGraph2Input)
  }

  @Mutation('removeGraph2')
  remove(@Args('id') id: number) {
    return this.graph2Service.remove(id)
  }
}
