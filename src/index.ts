console.log("starting index");
import "reflect-metadata";
import {createConnection, Connection ,getConnection,getRepository} from "typeorm";
import {car} from "../src/entity/car" ;




console.log("hello1");// for debuging



    createConnection({
    name:"conn",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password: "12345",
    database: "crudapi",
    entities: [
        car
    ],
    synchronize: true,
    logging: false

  }).then(  connection => {

   
     
    console.log("connection created");
 

  }).catch(error => console.log(error));


  const con= getConnection("conn");


  
  export default con;

 
  
   
  
  
   


 

  
 
 
 



 
  
