const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into notes(note_title, note_body, note_date) values(?, ?, ?)`,
            [
                data.note_title,
                data.note_body,
                data.note_date
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    },

    getNotes: callBack => {
        pool.query(
            `select note_id, note_title, note_body, note_date from notes`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getNoteByNoteId: (id, callBack) => {
        pool.query(
            `select note_id, note_title, note_body, note_date from notes where id = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    updateNote: (data, callBack) => {
        pool.query(
            `update notes set note_title=?, note_body=?, note_date=? where note_id=?`,
            [
                data.note_title,
                data.note_body,
                data.note_date,
                data.note_id
            ],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    deleteNote: (data, callBack) => {
        pool.query(
            `delete from notes where id = ?`,
            [data.id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};