const { 
    create, 
    getNotes, 
    getNoteByNoteId, 
    updateNote, 
    deleteNote
 } = require("./note.service");

module.exports = {
    createNote: (req, res) => {
        const body = req.body;

        create(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.ststus(500).json({
                    success: 0,
                    message: "Database Connection Error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getNotes: (req, res) => {
        getNotes((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getNoteByNoteId: (req, res) => {
        const id = req.params.id;
        getNoteByNoteId(id, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "record not Found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        })
    },

    updateNote: (req, res) => {
        const body = req.body;

        updateNote(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.status(200).json({
                success: 1,
                data: "updated successfully" 
            });
        });
    },

    deleteNote: (req, res) => {
        const id = req.params.id;
        deleteNote(id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
}