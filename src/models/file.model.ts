import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

export interface IFile {
  id: number;
  name: string;
  folder_id: number | null;
  size: number;
  type: string;
  created_at: Date;
  updated_at: Date;
}

type FileCreationAttributes = Optional<
  IFile,
  "id" | "created_at" | "updated_at"
>;

// Model Sequelize untuk table File
class File extends Model<IFile, FileCreationAttributes> implements IFile {
  public id!: number;
  public name!: string;
  public folder_id!: number | null;
  public size!: number;
  public type!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

File.init(
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
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: "files",
    timestamps: false,
  }
);

export default File;