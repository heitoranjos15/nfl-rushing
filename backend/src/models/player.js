module.exports = (sequelize, DataTypes) =>
  sequelize.define('Player', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attempts: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attemptsPerGame: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'attempts_per_game',
    },
    yards: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    averageRushingYardsAttempts: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'average_rushing_yard_attempts'
    },
    yardsPerGame: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'yards_per_game',
    },
    touchdowns: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    longestTouchdown: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'longest_touchdown',
    },
    rushToFirstDown: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'rush_to_first_down',
    },
    rushToFirstDownPercentage: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'rush_to_first_down_percentage',
    },
    longRushes: {
      type: DataTypes.JSON,
      allowNull: false,
      field: 'long_rushes',
    },
    fumbles: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
  )
