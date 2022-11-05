"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("api_todo_table", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			activity_group_id: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			is_active: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			priority: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			deleted_at: {
				type: Sequelize.DATE,
				allowNull: true,
				paranoid: true,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("api_node_table");
	},
};
