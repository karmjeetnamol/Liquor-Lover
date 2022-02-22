const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { truncate } = require('./User');

//Post model
class Whiskey extends Model {
    static upvote(body, models) {
        return models.Vote.create({
          user_id: body.user_id,
          whiskey_id: body.whiskey_id
        }).then(() => {
          return Whiskey.findOne({
            where: {
              id: body.whiskey_id
            },
            attributes: [
                'id',
                'name',
                'bottle_size',
                'price_paid',
                'resell_value',
                'user_id',
                [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE whiskey.id = vote.whiskey_id)'), 'vote_count']
            ]
          });
        });
      }
    }

//columns for Post model
Whiskey.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // limiting the number of preselected
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bottle_size: {
          type: DataTypes.TEXT,
          allowNull: truncate
      },
      price_paid: {
          type: DataTypes.FLOAT,
          allowNull: true
      },
      resell_value: {
          type: DataTypes.FLOAT,
          alllowNull: true
      },
      notes: {
          type: DataTypes.TEXT,
          allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'whiskey'
    }
  );

  module.exports = Whiskey;