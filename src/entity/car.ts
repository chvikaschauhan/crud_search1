 import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity()
 export class car{


     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     make: string;
     
     @Column()
     model: string;

     @Column()
     year: number;

    

 }
