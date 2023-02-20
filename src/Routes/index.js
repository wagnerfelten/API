const {Router} = require("express");

const userRouter = require("./user.Routes");

const routes = Router();

routes.use("/users", userRouter);

module.exports = routes;