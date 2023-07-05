import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarAlunos1688492954009 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner .createTable(
            new Table ({
                name: 'Aluno',
                columns: [
                    {
                        name: 'codigo',
                        type: 'varchar',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '50',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Aluno');
    }

}
