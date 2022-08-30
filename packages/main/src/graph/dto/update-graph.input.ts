import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { CreateGraphInput } from './create-graph.input'

@InputType()
export class UpdateGraphInput extends PartialType(CreateGraphInput) {
  @Field(() => Int)
    id: number
}
