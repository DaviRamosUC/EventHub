import { EntityRepository, Repository } from 'typeorm';
import { Evento } from '../entities/EventoEntity';

@EntityRepository(Evento)
export class EventoRepository extends Repository<Evento> {
}