import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarCursos1688501690368 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner .createTable(
            new Table ({
                name: 'Curso',
                columns: [
                    {
                        name: 'codigo',
                        type: 'varchar',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'descricao',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'ementa',
                        type: 'text', 
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Curso');
    }
}
