import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Blog {
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column("varchar", {length: 50})
    public title: string;

    @Column("varchar", {length: 255})
    public content: string;
}
