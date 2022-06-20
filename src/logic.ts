import { DataSource } from "typeorm";
import { Garden } from "@entities/Garden";
import { Plant } from "@entities/Plant";

export default async function generatePlan(dbContext: DataSource, garden: Garden): Promise<void> {
  
    //create sample 2d array - copilot du gschissena, dua moi wos
//   for(let i = 0; i < garden2dArray.length; i++) {
//     for(let j = 0; j < garden2dArray[i].length; j++) {
//         if(garden2dArray[i][j] != -1){
//             Plant p = getSuitingPlant();
            
//         } 
//     }
//   }

garden = new Garden();

  garden.size = 5;
  await garden.save();
}

function getSuitingPlant(db: DataSource): Plant {
    db.getRepository(Plant).findOneBy
    var plant: Plant = new Plant();
    //find plant with index y in database


    return new Plant();
}