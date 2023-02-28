const { Router } = require("express");
const UserController = require("../controllers/UserController");

const userRoutes = Router();

const myMiddleware = (request, response, next) =>{
    console.log("You passed Middleware!!!")

    next();
}

const userController = new UserController();

userRoutes.post("/",myMiddleware, userController.create);
userRoutes.put("/:id", userController.update);


module.exports = userRoutes;