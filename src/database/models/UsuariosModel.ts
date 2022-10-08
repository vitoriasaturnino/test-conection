import { DataTypes } from "sequelize";
import { db } from "../db";

export const ColaboradoresModel = db.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_colaborador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key colaboradores table id
  },
  role: {
    type: DataTypes.ENUM('admin', 'gestor', 'colaborador'),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});