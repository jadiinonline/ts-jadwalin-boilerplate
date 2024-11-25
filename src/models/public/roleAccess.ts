import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface roleAccessAttributes {
    roleId?: string;
    accessId?: string;
}

@Table({
	tableName: "role_access",
	timestamps: true 
})
export class roleAccess extends Model<roleAccessAttributes, roleAccessAttributes> implements roleAccessAttributes {

    @Column({
    	field: "role_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	roleId?: string;

    @Column({
    	field: "access_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	accessId?: string;

}