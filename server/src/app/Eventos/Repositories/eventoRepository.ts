import { EntityRepository, Repository } from 'typeorm';
import { Evento } from '../entities/Evento';

@EntityRepository(Evento)
export class EventoRepository extends Repository<Evento> {
}