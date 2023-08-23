import { Injectable } from '@nestjs/common';
import {createClient }from '@astrajs/rest';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getMeals() {

    const astraClient = await createClient({
      astraDatabaseId: process.env.ASTRA_DB_ID,
      astraDatabaseRegion: process.env.ASTRA_DB_REGION,
      applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });
    
    return [
      {name: "Eba" }, 
      {name: "Rice"}
    ];
  }
}
