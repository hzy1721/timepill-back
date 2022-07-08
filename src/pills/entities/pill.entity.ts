import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Pill {
  @PrimaryColumn()
  key: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  openTime: Date;

  @Column()
  content: string;

  @Column()
  hint: string;

  @Column()
  createTime: Date;
}
