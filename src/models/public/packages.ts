import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface packagesAttributes {
    id: string;
    venueId?: string;
    timeGranularity?: number;
    price?: string;
    disable?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
}

@Table({
	tableName: "packages",
	timestamps: true 
})
export class packages extends Model<packagesAttributes, packagesAttributes> implements packagesAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    @Index({
    	name: "packages_pkey",
    	using: "btree",
    	unique: true 
    })
    	id!: string;

    @Column({
    	field: "venue_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	venueId?: string;

    @Column({
    	field: "time_granularity",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	timeGranularity?: number;

    @Column({
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	price?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	disable?: boolean;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updatedAt?: Date;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "created_by",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	createdBy?: string;

    @Column({
    	field: "updated_by",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	updatedBy?: string;

    @Column({
    	field: "deleted_by",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	deletedBy?: string;

}