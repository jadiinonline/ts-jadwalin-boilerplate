import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface socialMediaAttributes {
    id: string;
    userId?: string;
    socialMediaId?: string;
    socialMediaType?: any;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
}

@Table({
	tableName: "social_media",
	timestamps: true 
})
export class socialMedia extends Model<socialMediaAttributes, socialMediaAttributes> implements socialMediaAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    @Index({
    	name: "social_media_pkey",
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
    	field: "social_media_id",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	socialMediaId?: string;

    @Column({
    	field: "social_media_type",
    	allowNull: true 
    })
    	socialMediaType?: any;

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