var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator");
const { Table } = require("../models/api-activity-table");

const validation = new Validator();

/* Get All Data */
router.get("/", async (req, res) => {
	const allData = await Table.findAll();

	return res.json({
		status: "Success",
		message: "message",
		data: allData,
	});
});

/* Get Data By ID */
router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const dataId = await Table.findByPk(id);

	return res.json({
		status: "Success",
		message: "message",
		data: dataId,
	});
});

/* POST New Data. */
router.post("/", async function (req, res, next) {
	const schema = {
		email: "email",
		title: "string",
	};

	const validate = validation.validate(req.body, schema);

	if (validate.length) {
		return res.status(400).json(validate);
	}

	// Save to DB
	const dataTable = await Table.create(req.body);

	// res.json(dataTable);
	return res.json({
		status: "Success",
		message: "message",
		data: dataTable,
	});
});

// By ID

router.patch("/:id", async (req, res) => {
	const id = req.params.id;

	let tableID = await Table.findByPk(id);

	if (!tableID) {
		return res.json({ message: "List not found" });
	}

	const schema = {
		email: "email|string|optional",
		title: "string|optional",
	};

	const validate = validation.validate(req.body, schema);

	if (validate.length) {
		return res.status(400).json(validate);
	}

	tableID = await tableID.update(req.body);

	res.json(tableID);
});

// Delete

router.delete("/:id", async (req, res) => {
	const id = req.params.id;

	const tableID = await Table.findByPk(id);

	if (!tableID) {
		return res.json({ message: "List not found" });
	}

	try {
		await tableID.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.json({
			status: "Success",
			message: "Todo Deleted",
			data: {},
		});
	} catch (error) {
		res.json(error.message);
	}
	// await tableID.destroy();
});

module.exports = router;
