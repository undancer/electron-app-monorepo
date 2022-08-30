import { Test, TestingModule } from '@nestjs/testing'
import { PlayingController } from './playing.controller'
import { PlayingService } from './playing.service'

describe('PlayingController', () => {
  let controller: PlayingController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayingController],
      providers: [PlayingService],
    }).compile()

    controller = module.get<PlayingController>(PlayingController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
