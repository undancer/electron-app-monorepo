import { Test, TestingModule } from '@nestjs/testing'
import { BrowsingController } from './browsing.controller'
import { BrowsingService } from './browsing.service'

describe('BrowsingController', () => {
  let controller: BrowsingController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrowsingController],
      providers: [BrowsingService],
    }).compile()

    controller = module.get<BrowsingController>(BrowsingController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
