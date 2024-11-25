import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface bookingDetailsAttributes {
    id: string;
    bookingId?: string;
    packageId?: string;
    qty?: number;
    price?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
}

@Table({
	tableName: "booking_details",
	timestamps: true 
})
export class bookingDetails extends Model<bookingDetailsAttributes, bookingDetailsAttributes> implements bookingDetailsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    @Index({
    	name: "booking_details_pkey",
    	using: "btree",
    	unique: true 
    })
    	id!: string;

    @Column({
    	field: "booking_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	bookingId?: string;

    @Column({
    	field: "package_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	packageId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	qty?: number;

    @Column({
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	price?: string;

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