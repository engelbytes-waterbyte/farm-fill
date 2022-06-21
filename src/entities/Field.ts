import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Garden } from "./Garden";
import { Plant } from "./Plant";

@Entity()
export class Field extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // rowInGarden: number;

  // @Column()
  // columnInGarden: number;

  @ManyToOne(() => Garden, (garden) => garden.fields)
  garden: Garden;

  // @ManyToOne(() => Plant, (plant) => plant.fields)
  // plant: Plant;
}
