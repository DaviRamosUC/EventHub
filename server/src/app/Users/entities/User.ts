import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: string

  @Column({ type: 'varchar', length: 255 })
  name!: string

  @Column({ type: 'varchar', length: 30 })
  email!: string

  @Column({ type: 'varchar', length: 30 })
  password!: string

  @Column({ type: 'varchar', length: 255 })
  token!: string

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
