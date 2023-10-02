import { Router } from 'express'

import authMiddleware from '../Auth/middlewares/AuthMiddleware'

import eventosController from '../Eventos/controllers/EventosController'

const routes = Router()

routes.get('/eventos', authMiddleware, eventosController.index)
routes.post('/eventos', authMiddleware, eventosController.create)
routes.get('/eventos/:id', authMiddleware, eventosController.search)
routes.put('/evento/:id', authMiddleware, eventosController.update)

export default routes
