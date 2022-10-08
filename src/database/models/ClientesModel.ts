import { DataTypes } from "sequelize";
import { db } from "../db";

export const ColaboradoresModel = db.define('clientes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  contato: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});