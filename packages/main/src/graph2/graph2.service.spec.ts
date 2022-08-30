import { Test, TestingModule } from '@nestjs/testing'
import { Graph2Service } from './graph2.service'

describe('Graph2Service', () => {
  let service: Graph2Service

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Graph2Service],
    }).compile()

    service = module.get<Graph2Service>(Graph2Service)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
