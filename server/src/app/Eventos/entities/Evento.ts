import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from 'typeorm';
  
  import { v4 as uuid } from 'uuid';

  @Entity('evento')
  export class Evento {
    @PrimaryGeneratedColumn()
      id!: string;
  
    @Column({ type: 'varchar', length: 255 })
      nome!: string;
  
    @Column({ type: 'text', nullable: true })
      descricao!: string;
  
    @Column({ type: 'timestamp' })
      data_hora!: Date;
  
    @Column({ type: 'varchar', length: 255 })
      link!: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
      organizador!: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
      localizacao!: string;
  
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
      preco!: number;
  
    @Column({ type: 'int', nullable: true })
      vagas_disponiveis!: number;
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
      criado_em!: Date;

      constructor(){
        if (!this.id) {
          this.id = uuid();
        }
      }
  }
  