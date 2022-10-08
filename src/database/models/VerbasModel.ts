import { DataTypes } from "sequelize";
import { db } from "../db";

export const ColaboradoresModel = db.define('verbas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_apontamento_horas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key apontamento_horas table id
  },
  codigo: {
    type: DataTypes.ENUM(),
    allowNull: false,
  },
  fator: {
    type: DataTypes.ENUM(),
    // como existe um fator de multiplicação correspondente a um unico código verificar se pode haver um defaulte value e ou o fator pode ser setado caso o código seja o certo 
    allowNull: false,
  },
  descrição_verba: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});