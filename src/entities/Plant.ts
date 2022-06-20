import {BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Field} from "./Field";
import {ResourceUsage} from "./ResourceUsage";

@Entity()
export class Plant extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Field, (field) => field.plant)
    fields: Field[];

    @Column()
    lengthRequired: number;

    @Column()
    widthRequired: number;

    // Noch wos ma des guad pflonzn konn
    @Column()
    goodPredecessor: Plant[];

    // Wos ma guad danoch pflonzn konn
    @Column()
    goodSuccessor: Plant[];

    @Column()
    goodNeighbors: Plant[];

    @Column()
    badNeighbors: Plant[];

    @ManyToOne(() => ResourceUsage, (res) => res.plants)
    resourceUsage: ResourceUsage;
}
