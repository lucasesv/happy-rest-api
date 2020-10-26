import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addPendingApprovalColumn1603043802457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("orphanage", new TableColumn({
            name: "pending_approval",
            type: "boolean",
            default: "true"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}