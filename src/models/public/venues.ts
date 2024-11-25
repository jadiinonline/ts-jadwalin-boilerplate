import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface venuesAttributes {
    id: string;
    name?: string;
    address?: string;
    email?: string;
    categoryId?: string;
    partnerId?: string;
    longitude?: string;
    latitude?: string;
    msisdn?: string;
    isMsisdnSyncWa?: boolean;
    thumbnailImageProfile?: string;
    imageProfiles?: any;
    facilities?: string;
    policies?: string;
    status?: any;
    bankId?: string;
    bankAccountNumber?: string;
    bankAccountName?: string;
    payoutSchedule?: any;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
    personResponsible?: string;
}

@Table({
	tableName: "venues",
	timestamps: true 
})
export class venues extends Model<venuesAttributes, venuesAttributes> implements venuesAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    @Index({
    	name: "venues_pkey",
    	using: "btree",
    	unique: true 
    })
    	id!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	address?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	email?: string;

    @Column({
    	field: "category_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	categoryId?: string;

    @Column({
    	field: "partner_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	partnerId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	longitude?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	latitude?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	msisdn?: string;

    @Column({
    	field: "is_msisdn_sync_wa",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isMsisdnSyncWa?: boolean;

    @Column({
    	field: "thumbnail_image_profile",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	thumbnailImageProfile?: string;

    @Column({
    	field: "image_profiles",
    	allowNull: true 
    })
    	imageProfiles?: any;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	facilities?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	policies?: string;

    @Column({
    	allowNull: true 
    })
    	status?: any;

    @Column({
    	field: "bank_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	bankId?: string;

    @Column({
    	field: "bank_account_number",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	bankAccountNumber?: string;

    @Column({
    	field: "bank_account_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	bankAccountName?: string;

    @Column({
    	field: "payout_schedule",
    	allowNull: true 
    })
    	payoutSchedule?: any;

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

    @Column({
    	field: "person_responsible",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	personResponsible?: string;

}