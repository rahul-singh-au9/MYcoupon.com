const express = require("express");

const {createItem, getItems, getItem} = require("../controllers/itemController");


const itemsRouter = express.Router();

itemsRouter.get("/", getItems);
itemsRouter.get("/:id", getItem);
itemsRouter.post("/", createItem);

// itemsRouter.patch('/:id/showQrItem', showQrItem);

module.exports = itemsRouter;