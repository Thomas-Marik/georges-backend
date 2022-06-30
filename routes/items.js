import express from "express";
import {
  createItem,
  deleteItem,
  getAllItems,
  getItemById,
  getItemsByLocation,
  getItemsUnderPar,
  updateItem,
} from "../controllers/items.js";
/**
 *  Routes for the items of the app
 * @author Matthew T Hanrahan
 * @date 6/29/22
 */
const router = express.Router();

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.get("/location/:location", getItemsByLocation);
router.get("/par/par", getItemsUnderPar);
router.post("/", createItem);
router.patch("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
