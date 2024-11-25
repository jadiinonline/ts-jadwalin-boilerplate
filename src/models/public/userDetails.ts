import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userDetailsAttributes {
    id: string;
    userId?: string;
    genderId?: string;
    address?: string;
    nik?: string;
    bankAccountNumber?: string;
    bankId?: string;
    bankAccountName?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
}

@Table({
	tableName: "user_details",
	timestamps: true 
})
export class userDetails extends Model<userDetailsAttributes, userDetailsAttributes> implements userDetailsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    @Index({
    	name: "user_details_pkey",
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
    	field: "gender_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	genderId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	address?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	nik?: string;

    @Column({
    	field: "bank_account_number",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	bankAccountNumber?: string;

    @Column({
    	field: "bank_id",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	bankId?: string;

    @Column({
    	field: "bank_account_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	bankAccountName?: string;

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