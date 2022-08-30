import { Test, TestingModule } from '@nestjs/testing'
import { BrowsingService } from './browsing.service'

describe('BrowsingService', () => {
  let service: BrowsingService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrowsingService],
    }).compile()

    service = module.get<BrowsingService>(BrowsingService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
