import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface assetPackageAttributes {
    packageId?: string;
    assetId?: string;
}

@Table({
	tableName: "asset_package",
	timestamps: true 
})
export class assetPackage extends Model<assetPackageAttributes, assetPackageAttributes> implements assetPackageAttributes {

    @Column({
    	field: "package_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	packageId?: string;

    @Column({
    	field: "asset_id",
    	allowNull: true,
    	type: DataType.UUID 
    })
    	assetId?: string;

}