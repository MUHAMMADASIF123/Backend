import express from "express";

import {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
  saveUser,
} from "../Controllers/User.js";
// import { getUsers, } from "../Controllers/User.js";
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", saveUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
