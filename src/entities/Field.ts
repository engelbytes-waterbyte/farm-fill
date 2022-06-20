import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Field extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
