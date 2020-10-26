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

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id);

    return response.json(orphanageView.render(orphanage));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);
  
    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
    }

    const orphanage = orphanagesRepository.create(data);
  
    await orphanagesRepository.save(orphanage);

    return response
      .status(201)
      .json(orphanage); 
  }
}