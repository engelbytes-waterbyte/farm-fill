import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Field} from "./Field";

@Entity()
export class Garden {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    size: number;

    @OneToMany(() => Field, (field) => field.garden)
    fields: Field[];
}