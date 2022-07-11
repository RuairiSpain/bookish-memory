import { InputType, Int, Field } from '@nestjs/graphql';
import { ServiceCard } from 'src/service-card/entities/service-card.entity';

@InputType()
export class CreateVersionInput {
  @Field(() => String, { description: 'id of the version' })
  public id!: string;
  @Field(() => String, {
    description: 'SemVer value for this version of the service',
  })
  public semVer: string;
  @Field(() => String, { description: 'Description of service' })
  public changeSet: string;

  @Field(() => String, {
    description: 'URL download this version of the service',
  })
  public imageUrl: string;

  @Field(() => ServiceCard, { description: 'Versions of service' })
  public serviceCard: ServiceCard;
}
