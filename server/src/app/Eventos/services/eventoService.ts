import { getDataSource } from "../../../database/data-source";
import { Evento } from "../entities/EventoEntity";
import { EventoRepository } from "../Repositories/eventoRepository";

export class EventoService {
  private eventoRepository: EventoRepository;
  private appDataSource : any
  constructor() {
    this.appDataSource = getDataSource().manager;
    console.log(this.appDataSource)
    this.eventoRepository = this.appDataSource.getCustomRepository(EventoRepository);
  }

  public async createEvento(eventoData: Partial<Evento>): Promise<Evento> {
    const evento = this.eventoRepository.create(eventoData);
    return await this.eventoRepository.save(evento);
  }

  public async getEventoById(id: string): Promise<Evento | null> {
    return this.eventoRepository.findOneById(id);
  }

  public async getAllEventos(): Promise<Evento[]> {
    return this.eventoRepository.find();
  }

  public async updateEvento(
    id: string,
    eventData: Partial<Evento>
  ): Promise<Evento | null> {
    await this.eventoRepository.update(id, eventData);
    return this.eventoRepository.findOneById(id);
  }

  public async deleteEvento(id: string): Promise<void> {
    await this.eventoRepository.delete(id);
  }
}
