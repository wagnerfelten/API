
require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");
const express  = require("express");
const routes = require("./Routes");
const AppError = require("./utils/AppError");

const app = express();

migrationsRun();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error!"
    });
})


const PORT = 1919;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

