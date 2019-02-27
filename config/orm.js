var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
    // selectAll()
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne()
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        console.log(queryString);

        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    // updateOne()
    updateOne: function (table, objColVals, condition, cb) {
        const queryString = "UPDATE ?? SET ? WHERE ?"

        console.log(queryString);
        const query = connection.query(queryString, [table, objColVals, condition], function (err, result) {
            console.log(query.sql);
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;