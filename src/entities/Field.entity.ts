import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Garden } from "./Garden.entity";
import { Plant } from "./Plant.entity";

@Entity()
export class Field extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rowInGarden: number;

  @Column()
  columnInGarden: number;

  @Column({ type: "simple-json", nullable: true })
  @ManyToOne(() => Garden, (garden) => garden.fields)
  garden: Garden;

  @Column({ type: "simple-array", nullable: true })
  previousPlants: Plant[];

  @Column({ type: "simple-json", nullable: true })
  @ManyToOne(() => Plant, (plant) => plant.fields)
  plant: Plant;
}
