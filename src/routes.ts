import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';


const routes = Router();

routes.get('/orphanages', OrphanagesController.index);

export default routes;