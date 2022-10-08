import mysql from 'mysql2';
import { promisify } from 'util';

const pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b477cd5d42f1ca',
    password: "eaa25934",
    database: 'heroku_51cf9c0988a8b87'
});

pool.getConnection((err, connection) => {

    if( err ){
        if( err.code === 'PROTOCOL_CONNECTION_LOST' ) console.log('DATABASE CONNECTION WAS CLOSED');
        if( err.code === 'ER_CON_COUNT_ERROR' ) console.log('DATABASE HAS TO MANY CONNECTIONS');
        if( err.code === 'ECONNREFUSED' ) console.log('DATABASE CONNECTION WAS REFUSED');
    }

    if( connection ) connection.release();

    console.log('DataBase is connected to '+ process.env.DB_DATABASE);
    return;
});

pool.query = promisify( pool.query );


export default pool;