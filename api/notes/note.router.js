const { 
    createNote, 
    getNoteByNoteId, 
    getNotes, 
    updateNote, 
    deleteNote
 } = require("./note.controller");
const router = require("express").Router();

router.post("/", createNote);
router.get("/", getNotes);
router.get("/:id", getNoteByNoteId);
router.patch("/", updateNote);
router.delete("/", deleteNote);

module.exports = router;