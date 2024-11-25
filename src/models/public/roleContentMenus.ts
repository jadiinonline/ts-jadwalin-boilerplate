import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface roleContentMenusAttributes {
    roleId?: string;
    contentMenuId?: string;
}

@Table({
	tableName: "role_content_menus",
	timestamps: true 
})
export class roleContentMenus extends Model<roleContentMenusAttributes, roleContentMenusAttributes> implements roleContentMenusAttributes {

    @Column({
    	field: "role_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	roleId?: string;

    @Column({
    	field: "content_menu_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	contentMenuId?: string;

}