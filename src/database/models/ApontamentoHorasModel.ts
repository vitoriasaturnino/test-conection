import { DataTypes } from "sequelize";
import { db } from "../db";

export const ColaboradoresModel = db.define('apontamentoHoras', {
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
  id_gestor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key gestores table id
  },
  id_projeto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key projetos table id
  },
  tipo_apontamento: {
    type: DataTypes.ENUM('hora extra', 'sobreaviso'),
    allowNull: false,
  },
  horario_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  horario_fim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  justificativa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});