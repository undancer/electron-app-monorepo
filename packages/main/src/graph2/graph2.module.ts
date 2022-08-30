import { Module } from '@nestjs/common'
import { Graph2Service } from './graph2.service'
import { Graph2Resolver } from './graph2.resolver'

@Module({
  providers: [Graph2Resolver, Graph2Service],
})
export class Graph2Module {}
