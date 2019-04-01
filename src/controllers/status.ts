import { Request, Response } from "express";

import {car} from "../entity/car" ;
import con from "../index";

import insert from "../insert";
import "reflect-metadata";
export let home =async (req: Request, res: Response) => {

   res.send("To inser = /isert?make=maker&model=carmodel&year=car year"+"to search=/serch?key=carid"+"to remove =/remove?key=car id" );
   
};
export let ins = async (req: Request, res: Response) => {
    var make =req.query.make;
    var model =req.query.model;
    var year=req.query.year;
   


   
       
       
      let getrepo =await con.getRepository(car);
       await getrepo.save(insert.car(make,model,year));
       res.send("car saved");
        console.log("car has been saved");
       
};

export let search =async (req: Request, res: Response) => {

    var key =req.query.key;

   

   
   
  let getrepo = con.getRepository(car);
 
  let searchcar =await getrepo.findOne(key);
  res.send("car found"+"\n"+ searchcar.id +"\n"+ searchcar.make +"\n"+ searchcar.model +"\n"+ searchcar.year);
   
};

export let remove = async (req: Request, res: Response) => {
    var key =req.query.key;

   
 
     
    
    let getrepo = con.getRepository(car);
   
    let  carToRemove = await getrepo.findOne(key);
      await  getrepo.remove(carToRemove);
      res.send("car removed with id="+carToRemove.id);
     
       
      console.log("car removed");
      
};