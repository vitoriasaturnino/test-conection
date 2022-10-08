import { DataTypes } from "sequelize";
import { db } from "../db";

export const ColaboradoresModel = db.define('centroDeResultados', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_projeto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key projetos table id
  },
  id_colaborador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key colaboradores table id
  },
  id_gestor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key gestores table id
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});