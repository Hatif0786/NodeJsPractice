const mysql = require('mysql2')


const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Hatif.khuld1',
    database: 'NodeJsPracticeDB',
    port: '3306'

});

// conn.connect((err) => {

//     if(err){
//         console.warn(err);
//     }else{
//         console.warn("Connected!!");
//     }
// })

conn.query("select * from user", (_err, res) => {
    console.log(res)
})