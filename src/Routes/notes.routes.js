const {Router} = require("express");

const NotesController = require("../controllers/NotesControllers");

const notesRouter = Router();

const notesController = new NotesController();

notesRouter.post("/:user_id", notesController.create);

module.exports = notesRouter;