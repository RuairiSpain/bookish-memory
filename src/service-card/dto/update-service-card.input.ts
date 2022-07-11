import { CreateServiceCardInput } from './create-service-card.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateServiceCardInput extends PartialType(
  CreateServiceCardInput,
) {
  @Field(() => String)
  id: string;
}
