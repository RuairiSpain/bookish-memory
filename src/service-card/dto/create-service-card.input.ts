import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceCardInput {
  @Field(() => String, { description: 'id of the service' })
  public id!: string;
  @Field(() => String, { description: 'Name of service' })
  public name: string;
  @Field(() => String, { description: 'Description of service' })
  public description: string;
  @Field(() => String, {
    description: 'Organization that owns the service',
  })
  public organization: string;
  @Field(() => String, {
    description: 'Email address of the owner of the service',
  })
  public email: string;
  @Field(() => String, {
    description: 'URL for the latest version of the service docker image',
  })
  public imageUrl: string;
  @Field(() => String, {
    description:
      'Project page where the service provides support and maintenance documentation',
  })
  public projectUrl: string;
  @Field(() => String, {
    description: 'Logo for the service',
  })
  public logoUrl: string;
}
