import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field } from "./Field.entity";

@Entity()
export class Garden extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: number;

  @Column({ type: "simple-json", nullable: true })
  @OneToMany(() => Field, (field) => field.garden)
  fields: Field[];
}
