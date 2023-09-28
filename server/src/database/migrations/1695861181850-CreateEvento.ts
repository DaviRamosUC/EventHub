import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEvento1695861181850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "evento",
            columns: [
                { name: "id", type: "uuid", isPrimary: true },
                { name: "nome", type: "varchar", length: "255", isNullable: false },
                { name: "descricao", type: "text", isNullable: true },
                { name: "data_hora", type: "timestamp", isNullable: false },
                { name: "link", type: "varchar", length: "255", isNullable: false },
                { name: "organizador", type: "varchar", length: "255", isNullable: true },
                { name: "localizacao", type: "varchar", length: "255", isNullable: true },
                { name: "preco", type: "decimal", precision: 10, scale: 2, isNullable: true },
                { name: "vagas_disponiveis", type: "integer", isNullable: true },
                { name: "criado_em", type: "timestamp", default: "CURRENT_TIMESTAMP" }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("evento");
    }

}
