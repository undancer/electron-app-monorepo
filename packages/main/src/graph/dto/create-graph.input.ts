import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateGraphInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
    exampleField: number
}
