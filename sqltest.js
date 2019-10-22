let conn = require("./conf/dbconnetion");
let dbconn = conn.init();

let sql = " SELECT max(id) as max_id "
        + " FROM TB_APP_USER "
        + " WHERE GRP_ID=13 "
        + " AND CUST_ID != '' ";

let sql2 = " SELECT ID, GRP_ID "
        + "  FROM TB_APP_USER "
        + "  WHERE GRP_ID=13 "
        + "  AND CUST_ID != '' "
        + "  AND ID BETWEEN 100300 and 100400 "
        + "  AND UPT_DATE <= '2019-08-19 17' ";

dbconn.query(sql, function(err, rows) {
    if(!err) {
        for (let obj of rows) {
            console.log(" id is ", obj.max_id)
        }
    } else {
        console.log('Error while performing Query.', err);
    }
});

dbconn.end();
