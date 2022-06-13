import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Field} from "./Field";
import {ResourceUsage} from "./ResourceUsage";

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Field, (field) => field.plant)
    fields: Field[];

    @Column()
    lengthRequired: number;

    @Column()
    widthRequired: number;

    // Noch wos ma des guad pflonzn konn
    @Column()
    goodPredecessor: Plant;

    // Wos ma guad danoch pflonzn konn
    @Column()
    goodSuccessor: Plant;

    @Column()
    goodNeighbors: Plant[];

    @Column()
    badNeighbors: Plant[];

    @OneToMany(() => ResourceUsage, (res) => res.plants)
    resourceUsage: ResourceUsage;
}