import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userRolePartnerAttributes {
    userId?: string;
    roleId?: string;
    partner?: string;
    venueId?: string;
}

@Table({
	tableName: "user_role_partner",
	timestamps: true 
})
export class userRolePartner extends Model<userRolePartnerAttributes, userRolePartnerAttributes> implements userRolePartnerAttributes {

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	userId?: string;

    @Column({
    	field: "role_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	roleId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.UUID 
    })
    	partner?: string;

    @Column({
    	field: "venue_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	venueId?: string;

}