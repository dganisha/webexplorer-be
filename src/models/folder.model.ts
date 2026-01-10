import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

export interface IFolder {
  id: number;
  name: string;
  parent_id: number | null;
  created_at: Date;
  updated_at: Date;
}

type FolderCreationAttributes = Optional<
  IFolder,
  "id" | "created_at" | "updated_at"
>;

// Model Sequelize untuk table Folder
class Folder
  extends Model<IFolder, FolderCreationAttributes>
  implements IFolder
{
  public id!: number;
  public name!: string;
  public parent_id!: number | null;
  public created_at!: Date;
  public updated_at!: Date;
}

Folder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "folders",
    timestamps: false,
  }
);

Folder.hasMany(Folder, {
    as: 'children',
    foreignKey: 'parent_id',
});

Folder.belongsTo(Folder, {
    as: 'parent',
    foreignKey: 'parent_id',
});

export default Folder;