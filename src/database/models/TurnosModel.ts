import { DataTypes } from "sequelize";
import { db } from "../db";

export const ColaboradoresModel = db.define('turnos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  entrada_1: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  saida_1: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  entrada_2: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  saida_2: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});