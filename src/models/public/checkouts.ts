import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface checkoutsAttributes {
    id: string;
    userId?: string;
    adminFee?: string;
    customerName?: string;
    msisdn?: string;
    bookingCode?: string;
    totalBookingFee?: string;
    status?: any;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
}

@Table({
	tableName: "checkouts",
	timestamps: true 
})
export class checkouts extends Model<checkoutsAttributes, checkoutsAttributes> implements checkoutsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    @Index({
    	name: "checkouts_pkey",
    	using: "btree",
    	unique: true 
    })
    	id!: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	userId?: string;

    @Column({
    	field: "admin_fee",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	adminFee?: string;

    @Column({
    	field: "customer_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	customerName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	msisdn?: string;

    @Column({
    	field: "booking_code",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	bookingCode?: string;

    @Column({
    	field: "total_booking_fee",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	totalBookingFee?: string;

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