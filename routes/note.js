const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/token");
const {createNotes,getAllNotesById,updateNotes,deleteNotes,getAllNotes} = require("../controllers/note");

router.post("/create",verifyToken,createNotes);
router.get("/allnotes",verifyToken,getAllNotesById);
router.put("/notes/:id",verifyToken,updateNotes);
router.delete("/notes/:id",verifyToken,deleteNotes);
router.get("/getAllNotes",verifyToken,getAllNotes)




module.exports = router;