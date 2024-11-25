import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface schemaMigrationsAttributes {
    version: string;
    dirty?: boolean;
}

@Table({
	tableName: "schema_migrations",
	timestamps: true 
})
export class schemaMigrations extends Model<schemaMigrationsAttributes, schemaMigrationsAttributes> implements schemaMigrationsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "schema_migrations_pkey",
    	using: "btree",
    	unique: true 
    })
    	version!: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	dirty?: boolean;

}