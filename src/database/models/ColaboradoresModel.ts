import { DataTypes } from "sequelize";
import { db } from "../db";

export const ColaboradoresModel = db.define('colaboradores', {
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
  matricula: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  tipo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  id_turno: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key turnos table id
  } 
});