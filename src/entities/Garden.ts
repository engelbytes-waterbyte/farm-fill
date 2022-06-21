import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field } from "./Field";

@Entity()
export class Garden extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: number;

  // @Column({ type: "simple-json" })
  // @OneToMany(() => Field, (field) => field.garden)
  // fields: Field[];
}
