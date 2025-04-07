import express from "express";

const app = express();

app.listen(3000, () => console.log(`Server is listening to : ${3000}`));

import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
app.use("/api/v1/products", productRouter);
app.use("/api/v1/products", cartRouter);
