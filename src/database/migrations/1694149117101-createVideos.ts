import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateVideos1694149117101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "videos",
                columns : [
                    {
                        name:"id",
                        type : "uuid",
                        isUnique :true
                    },
                    {
                        name:"name",
                        type : "varchar",
                        isUnique : true
                    },
                    {
                        name: "category_id",
                        type:"uuid"
                    },
                    {
                        name : "description",
                        type : "varchar"
                    },
                    {
                        name:"duration",
                        type: "numeric"
                    },
                    {
                        name:"created_at",
                        type : "timestamp",
                        default : "now()"
                    }
                ],
                foreignKeys : [
                    {
                        name : "fk_category_video",
                        columnNames : ["category_id"],
                        referencedTableName : "categories",
                        referencedColumnNames : ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("videos");
    }

}
