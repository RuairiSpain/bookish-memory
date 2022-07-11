import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ServiceCard } from 'src/service-card/entities/service-card.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export class Version {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, {
    description: 'SemVer value for this version of the service',
  })
  @Column({ type: 'varchar', length: 50 })
  public semVer: string;

  @Field(() => String, { description: 'Description of service' })
  @Column({ type: 'varchar', length: 2000 })
  public changeSet: string;

  @Field(() => String, {
    description: 'URL download this version of the service',
  })
  @Column({ type: 'varchar', length: 500 })
  public imageUrl: string;

  @ManyToOne(() => ServiceCard, (serviceCard) => serviceCard.versions)
  @JoinColumn({ name: 'serviceCard_id', referencedColumnName: 'id' })
  @Field(() => ServiceCard, { description: 'Versions of service' })
  public serviceCard: ServiceCard;

  @DeleteDateColumn({ type: 'timestamp' })
  public deletedAt: Date;
  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
