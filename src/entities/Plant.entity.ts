import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field } from "./Field.entity";

enum ResourceUsageType {
  SCHWACHZEHRER = 0,
  MITTELZEHRER = 1,
  STARKZEHRER = 2,
}

@Entity()
export class Plant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lengthRequired: number;

  @Column()
  widthRequired: number;

  @Column("simple-array")
  @OneToMany(() => Field, (field) => field.plant)
  fields?: Field[];

  // Noch wos ma des guad pflonzn konn
  @Column("simple-array")
  goodPredecessor: Plant[];

  // Wos ma guad danoch pflonzn konn
  @Column("simple-array")
  goodSuccessor: Plant[];

  @Column("simple-array")
  goodNeighbors: Plant[];

  @Column("simple-array")
  badNeighbors: Plant[];

  @Column("simple-enum", { enum: ResourceUsageType })
  resourceUsage: ResourceUsageType;
}
