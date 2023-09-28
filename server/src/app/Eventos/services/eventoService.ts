import { Injectable } from '@nestjs/common';
import { InjectRepository } from 'typeorm';
import { Evento } from '../entities/Evento';
import { EventoRepository } from '../Repositories/eventoRepository';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento)
    private eventoRepository: EventoRepository,
  ) {}

  async createEvento(eventoData: Partial<Evento>): Promise<Evento> {
    const evento = this.eventoRepository.create(eventoData);
    return await this.eventoRepository.save(evento);
  }
}
