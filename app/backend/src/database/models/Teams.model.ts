import { DataTypes, Model } from 'sequelize';
import db from '.';
// import MatchModel from './Matches.model';
// import OtherModel from './OtherModel';

class TeamModel extends Model {
  declare id: number;
  declare teamName: string;
  declare image: string;
}

TeamModel.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  teamName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING,
  }
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// TeamModel.hasMany(MatchModel, { foreignKey: 'id', as: 'homeTeam' });
// TeamModel.hasMany(MatchModel, { foreignKey: 'id', as: 'awayTeam' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default TeamModel;
