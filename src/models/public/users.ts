import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface usersAttributes {
    id?: string;
    name?: string;
    email?: string;
    msisdn?: string;
    msisdnVerified?: boolean;
    isMsisdnSyncWa?: boolean;
    imageProfile?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
}

@Table({
	tableName: "users",
	timestamps: true 
})
export class users extends Model<usersAttributes, usersAttributes> implements usersAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID,
    	defaultValue: Sequelize.literal("uuid_generate_v4()") 
    })
    @Index({
    	name: "users_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	email?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	msisdn?: string;

    @Column({
    	field: "msisdn_verified",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	msisdnVerified?: boolean;

    @Column({
    	field: "is_msisdn_sync_wa",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isMsisdnSyncWa?: boolean;

    @Column({
    	field: "image_profile",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	imageProfile?: string;

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