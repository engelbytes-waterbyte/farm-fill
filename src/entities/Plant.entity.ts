import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field } from "./Field.entity";

export enum ResourceUsageType {
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

  @Column({ type: "simple-array", nullable: true })
  @OneToMany(() => Field, (field) => field.plant)
  fields?: Field[];

  // Noch wos ma des guad pflonzn konn
  @Column({ type: "simple-array", nullable: true })
  goodPredecessor: number[];

  // Wos ma guad danoch pflonzn konn
  @Column({ type: "simple-array", nullable: true })
  goodSuccessor: number[];

  @Column({ type: "simple-array", nullable: true })
  goodNeighbors: number[];

  @Column({ type: "simple-array", nullable: true })
  badNeighbors: number[];

  @Column({ type: "simple-enum", enum: ResourceUsageType })
  resourceUsage: ResourceUsageType;
}
