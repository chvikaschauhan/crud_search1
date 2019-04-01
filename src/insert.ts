//import {createConnection} from "typeorm";
import "reflect-metadata";
import {car} from "./entity/car";

//import conn from "../index";



console.log("inside ins");

 const insert ={



   
    car(make:string,model:string,year:number):car {
        let carobj = new car();    
  
    carobj.make = make;
    carobj.model = model;
    carobj.year =year;
    
    
    return carobj;
    }
     
 
 }
export default insert ;

