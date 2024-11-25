import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface walletUsersAttributes {
    id: string;
    userId?: string;
    debit?: string;
    credit?: string;
    balance?: string;
    remark?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
}

@Table({
	tableName: "wallet_users",
	timestamps: true 
})
export class walletUsers extends Model<walletUsersAttributes, walletUsersAttributes> implements walletUsersAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    @Index({
    	name: "wallet_users_pkey",
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