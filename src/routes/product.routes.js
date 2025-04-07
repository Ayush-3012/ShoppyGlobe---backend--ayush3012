import { Router } from "express";

const productRouter = Router();

productRouter.route("/produts").get(() => {});
productRouter.route("/produts/:productId").get(() => {});

export default productRouter;
