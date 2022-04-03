'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('player', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      team: {
        type: Sequelize.STRING,
        allowNull: false
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false
      },
      attempts: {
        type: Sequelize.STRING,
        allowNull: false
      },
      attemptsPerGame: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'attempts_per_game',
      },
      yards: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      averageRushingYardsAttempts: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'average_rushing_yard_attempts'
      },
      yardsPerGame: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'yards_per_game',
      },
      touchdowns: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      longestTouchdown: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'longest_touchdown',
      },
      rushToFirstDown: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'rush_to_first_down',
      },
      rushToFirstDownPercentage: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'rush_to_first_down_percentage',
      },
      longRushes: {
        type: Sequelize.JSON,
        allowNull: false,
        field: 'long_rushes',
      },
      fumbles: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('player')
  }
}
