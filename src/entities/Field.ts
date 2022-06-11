import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Field {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: number;
}
