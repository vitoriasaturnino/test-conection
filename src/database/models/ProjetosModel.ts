import { DataTypes } from "sequelize";
import { db } from "../db";

export const ColaboradoresModel = db.define('projetos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_clientes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key clientes table id
  },
  id_centro_de_resultados: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key centro_de_colaboradores table id
  },
  numero_projeto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});