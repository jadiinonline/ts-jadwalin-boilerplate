import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface walletVenuesAttributes {
    id: string;
    venueId?: string;
    trxId?: string;
    debit?: string;
    credit?: string;
    balance?: string;
    remark?: string;
    activityType?: any;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
}

@Table({
	tableName: "wallet_venues",
	timestamps: true 
})
export class walletVenues extends Model<walletVenuesAttributes, walletVenuesAttributes> implements walletVenuesAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    @Index({
    	name: "wallet_venues_pkey",
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
    	field: "trx_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	trxId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	debit?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	credit?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	balance?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	remark?: string;

    @Column({
    	field: "activity_type",
    	allowNull: true 
    })
    	activityType?: any;

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