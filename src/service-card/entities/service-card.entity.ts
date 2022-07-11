import { ObjectType, Field } from '@nestjs/graphql';
import { Version } from 'src/version/entities/version.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class ServiceCard {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the service' })
  public id!: string;
  @Field(() => String, { description: 'Name of service' })
  @Column({ type: 'varchar', length: 120 })
  @Index({ fulltext: true })
  public name: string;
  @Field(() => String, { description: 'Description of service' })
  @Column({ type: 'varchar', length: 2000 })
  @Index({ fulltext: true })
  public description: string;

  @Field(() => String, {
    description: 'Organization that owns the service',
  })
  @Column({ type: 'varchar', length: 250 })
  public organization: string;
  @Field(() => String, {
    description: 'Email address of the owner of the service',
  })
  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Field(() => String, {
    description: 'URL for the latest version of the service docker image',
  })
  @Column({ type: 'varchar', length: 500 })
  public imageUrl: string;
  @Field(() => String, {
    description: 'Project support and documentation',
  })
  @Column({ type: 'varchar', length: 500 })
  public projectUrl: string;
  @Field(() => String, {
    description: 'Logo URL for the service',
  })
  @Column({ type: 'varchar', length: 500 })
  public logoUrl: string;

  @OneToMany(() => Version, (version) => version.serviceCard)
  @Field(() => Version, { description: 'Versions of service' })
  public versions: Version[];

  @DeleteDateColumn({ type: 'timestamp' })
  public deletedAt: Date;
  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
