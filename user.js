
const db = require('./database')

class Users {

    static create(users, callback) {
        let sql_ins = "INSERT INTO crudusers SET ?";

        // for POST
        db.query(sql_ins, users, (err, result) => {
            if (err) {
                return callback(err)
            }

            callback(null, result)
        });
    }

    // for Get list
    static getAll(callback) {
        let sql_get_all = "SELECT * FROM crudusers";

        db.query(sql_get_all, (err, result) => {
            if (err) {
                return callback(err)
            }

            callback(null, result)
        });
    }

    // update notes by id
    static updates(id, newUser, callback) {
        let sql_update = `UPDATE crudusers SET ? WHERE id = ${id}`

        db.query(sql_update, newUser, (err, result) => {
            if (err) {
                return callback(err)
            }
    
            callback(null, result)
        });
    }


    // delete notes by id
    static deletes(id, callback) {
        let sql_del = `DELETE FROM crudusers WHERE id=${id}`;

        db.query(sql_del, (err, redult) => {
            if (err) {
                return callback(err)
            }

            callback(null, redult)
        });
    }

}

module.exports = Users;