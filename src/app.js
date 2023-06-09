import express from "express";
import cors from "cors";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import { productRouter } from "./routes/products";
import { orderRouter } from "./routes/order";
import { cartRouter } from "./routes/cart";
import { incomeRouter } from "./routes/income";
import paymentRoute from "./routes/payment";

const createApp = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));

  app.use(authRouter);
  app.use(userRouter);
  app.use(productRouter);
  app.use(orderRouter);
  app.use(cartRouter);
  app.use(incomeRouter);
  app.use(paymentRoute);
};

export default createApp;
