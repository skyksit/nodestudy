let mysql = require("mysql");
require("dotenv/config");

let dbconnInfo = {
    dev: {
        host : '',
        port : 3306,
        user : '',
        password : '',
        database : ''
    },
    real: {
        host : process.env.DB_HOST,
        port : 3306,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
    }
};

let dbconn = {
    init : function() {
        return mysql.createConnection(dbconnInfo.real);
    },

    dbopen : function(conn) {
        conn.connect(function(err){
            if(err)
                console.error(`mysql connection error : ${err}`);
            else
                console.info(`mysql connection success`);
        });
    }
}

module.exports = dbconn;