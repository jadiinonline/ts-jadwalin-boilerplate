import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface partnersAttributes {
    id?: string;
    partnerCode?: string;
    ownerId?: string;
    salesId?: string;
    name?: string;
    address?: string;
    imageProfile?: string;
    longitude?: string;
    latitude?: string;
    msisdn?: string;
    isMsisdnSyncWa?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
    npwpPartner?: string;
    isActive?: boolean;
    partnerCategory?: string;
}

@Table({
	tableName: "partners",
	timestamps: true 
})
export class partners extends Model<partnersAttributes, partnersAttributes> implements partnersAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID,
    	defaultValue: Sequelize.literal("uuid_generate_v4()") 
    })
    @Index({
    	name: "partners_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "partner_code",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	partnerCode?: string;

    @Column({
    	field: "owner_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	ownerId?: string;

    @Column({
    	field: "sales_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	salesId?: string;

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
    	field: "image_profile",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	imageProfile?: string;

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
    	field: "npwp_partner",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	npwpPartner?: string;

    @Column({
    	field: "is_active",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("true") 
    })
    	isActive?: boolean;

    @Column({
    	field: "partner_category",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	partnerCategory?: string;

}