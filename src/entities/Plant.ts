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
    // Welsch hod gmoant wir soin nur Nachfolger mochn
    @ManyToMany(() => Plant)
    @JoinTable()
    goodPredecessor: Plant[];

    // Wos ma guad danoch pflonzn konn
    // anscheinend haud des so irgendwie hi sogt der 2. hansl https://stackoverflow.com/questions/43747765/self-referencing-manytomany-relationship-typeorm
    @ManyToMany(() => Plant)
    @JoinTable()
    goodSuccessor: Plant[];

    @ManyToMany(() => Plant)
    @JoinTable()
    goodNeighbors: Plant[];

    @ManyToMany(() => Plant)
    @JoinTable()
    badNeighbors: Plant[];

    @ManyToOne(() => ResourceUsage, (res) => res.plants)
    resourceUsage: ResourceUsage;
}
