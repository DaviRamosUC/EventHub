import { Request, Response } from 'express'
import { EventoService } from '../services/eventoService'

class EventosController {
  public eventoService: EventoService
  constructor() {
    this.eventoService = new EventoService()
  }

  async create(_req: Request, res: Response): Promise<Response> {
    const evento = this.eventoService.createEvento(_req.body)

    return res.status(200).json(evento)
  }

  async index(_req: Request, res: Response): Promise<Response> {
    const eventos = this.eventoService.getAllEventos()

    return res.status(200).json(eventos)
  }

  async search(_req: Request, res: Response): Promise<Response> {
    const evento = this.eventoService.getEventoById(_req.params.id)

    return res.status(200).json(evento)
  }

  async update(_req: Request, res: Response): Promise<Response> {
    const evento = this.eventoService.updateEvento(_req.params.id, _req.body)

    return res.status(200).json(evento)
  }

  async delete(_req: Request, res: Response): Promise<Response> {
    const evento = this.eventoService.deleteEvento(_req.params.id)

    return res.status(200).json(evento)
  }
}

export default new EventosController()
