
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        root: 3306,
        host: process.env.jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com,
        user: process.env.qt2t6wxtbji7754h,
        password: process.env.m3pqqcaf4am6ttt4,
        database: "burgers_db"
    });
};


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;