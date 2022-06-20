import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Garden} from "./Garden";
import {Plant} from "./Plant";

@Entity()
export class Field extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rows: number;

    @Column()
    columns: number;

    @ManyToOne(() => Garden, (garden) => garden.fields)
    garden: Garden;

    @OneToMany(() => Plant, (plant) => plant.fields)
    plant: Plant;
}
