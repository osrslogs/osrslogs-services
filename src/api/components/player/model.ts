import { Model, DataTypes } from 'sequelize';

import sequelize from '../../../util/db-connection';

class Player extends Model {
  public id!: number;
  public name!: string;
  public mode!: string; // should be an enum?
  public status!: string; // should be an enum?

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  // TODO:
  // - Have methods for adding a datapoint for this player
  // - Player can have many datapoints
}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    mode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    tableName: 'players',
    sequelize,
  },
);

export default Player;
