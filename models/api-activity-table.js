module.exports = (sequelize, DataTypes) => {
	const Table = sequelize.define(
		"Table",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			title: {
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
			tableName: "api_node_table",
		}
	);

	// Table.associate = (models) => {
	// 	Table.belongsTo(models.TableTodo, {
	// 		foreignKey: "id",
	// 		targetKey: "id",
	// 	});
	// };

	return Table;
};
