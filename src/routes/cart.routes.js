import { Router } from "express";

const cartRouter = Router();

cartRouter.route("/cart").post(() => {})
cartRouter.route("/cart").put(() => {})
cartRouter.route("/cart").delete(() => {})

export default cartRouter