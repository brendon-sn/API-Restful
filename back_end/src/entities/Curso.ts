import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('Curso')
class Curso {
    @PrimaryColumn()
    codigo: string;

    @Column('varchar', { length: 50, nullable:false })
    descricao: string;

    @Column('text', { nullable:true })
    ementa: string;
}

export { Curso }