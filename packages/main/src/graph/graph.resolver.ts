import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GraphService } from './graph.service'
import { Graph } from './entities/graph.entity'
import { CreateGraphInput } from './dto/create-graph.input'
import { UpdateGraphInput } from './dto/update-graph.input'

@Resolver(() => Graph)
export class GraphResolver {
  constructor(private readonly graphService: GraphService) {}

  @Mutation(() => Graph)
  createGraph(@Args('createGraphInput') createGraphInput: CreateGraphInput) {
    return this.graphService.create(createGraphInput)
  }

  @Query(() => [Graph], { name: 'graph' })
  findAll() {
    return this.graphService.findAll()
  }

  @Query(() => Graph, { name: 'graph' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphService.findOne(id)
  }

  @Mutation(() => Graph)
  updateGraph(@Args('updateGraphInput') updateGraphInput: UpdateGraphInput) {
    return this.graphService.update(updateGraphInput.id, updateGraphInput)
  }

  @Mutation(() => Graph)
  removeGraph(@Args('id', { type: () => Int }) id: number) {
    return this.graphService.remove(id)
  }
}
