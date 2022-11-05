module.exports = (sequelize, DataTypes) => {
	const TableTodo = sequelize.define(
		"TableTodo",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			activity_group_id: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			is_active: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			priority: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "created_at",
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "updated_at",
			},
			deletedAt: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "deleted_at",
				paranoid: true,
			},
		},
		{
			tableName: "api_todo_table",
		}
	);

	// TableTodo.associate = (models) => {
	// 	TableTodo.belongsTo(models.Table, {
	// 		foreignKey: "id",
	// 		targetKey: "id",
	// 	});
	// };

	return TableTodo;
};
