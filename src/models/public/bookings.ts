import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface bookingsAttributes {
    id: string;
    checkoutId?: string;
    venueId?: string;
    salesId?: string;
    assetId?: string;
    packageId?: string;
    startTime?: string;
    endTime?: string;
    timeZone?: string;
    durationTime?: number;
    reservationDate?: Date;
    price?: string;
    status?: any;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
}

@Table({
	tableName: "bookings",
	timestamps: true 
})
export class bookings extends Model<bookingsAttributes, bookingsAttributes> implements bookingsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    @Index({
    	name: "bookings_pkey",
    	using: "btree",
    	unique: true 
    })
    	id!: string;

    @Column({
    	field: "checkout_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	checkoutId?: string;

    @Column({
    	field: "venue_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	venueId?: string;

    @Column({
    	field: "sales_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	salesId?: string;

    @Column({
    	field: "asset_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	assetId?: string;

    @Column({
    	field: "package_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	packageId?: string;

    @Column({
    	field: "start_time",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	startTime?: string;

    @Column({
    	field: "end_time",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	endTime?: string;

    @Column({
    	field: "time_zone",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	timeZone?: string;

    @Column({
    	field: "duration_time",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	durationTime?: number;

    @Column({
    	field: "reservation_date",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	reservationDate?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	price?: string;

    @Column({
    	allowNull: true 
    })
    	status?: any;

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