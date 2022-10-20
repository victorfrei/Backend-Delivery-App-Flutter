import mysql from 'mysql2';
import { promisify } from 'util';

const pool = mysql.createPool({
    host: 'db-mysql-nyc1-98944-do-user-12698162-0.b.db.ondigitalocean.com',
    user: 'doadmin',
    password: "AVNS_6CCKqpRPUL-yE62jyzM",
    database: 'defaultdb',
    port: 25060
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