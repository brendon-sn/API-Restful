import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('Aluno')
class Aluno {
    @PrimaryColumn()
    codigo: string;

    @Column('varchar', { length: 50, nullable: false })
    nome: string
}

export { Aluno }