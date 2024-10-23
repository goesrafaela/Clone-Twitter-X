//Rotas principais do sistema
import { Router } from "express";
import * as pingController from '../controllers/ping';


export const mainRouter = Router();

//rota ping (mostra que o sistema esta funcionando)
mainRouter.get('/ping', pingController.ping);