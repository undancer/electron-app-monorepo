import { Test, TestingModule } from '@nestjs/testing'
import { Graph2Resolver } from './graph2.resolver'
import { Graph2Service } from './graph2.service'

describe('Graph2Resolver', () => {
  let resolver: Graph2Resolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Graph2Resolver, Graph2Service],
    }).compile()

    resolver = module.get<Graph2Resolver>(Graph2Resolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
