import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanage from '../models/Orphanage';
import orphanageView from '../views/OrphanageView'


export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    
    const orphanages = await orphanagesRepository.find();

    return response.json(orphanageView.renderMany(orphanages));
  },

}