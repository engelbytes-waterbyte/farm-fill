import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Plant} from "./Plant";

export enum ResourceUsageType {
    SCHWACHZEHRER = 0,
    MITTELZEHRER = 1,
    STARKZEHRER = 2
}

@Entity()
export class ResourceUsage {
    //Schwach-, Mittel- bzw. Starkzehrer

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // Not 100% sure that this works - sqlite doesn't support enums, but according to https://github.com/typeorm/typeorm/issues/1414#issuecomment-487056609 this should do the trick
    @Column({type: 'simple-enum', enum: ResourceUsageType})
    resourceUsageType: number;

    @ManyToOne(() => Plant, (plant) => plant.resourceUsage)
    plants: Plant[];
}