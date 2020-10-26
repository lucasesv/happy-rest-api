import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';


const routes = Router();

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;