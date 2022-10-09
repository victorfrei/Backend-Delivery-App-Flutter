import mysql from 'mysql2';
import { promisify } from 'util';

const pool = mysql.createPool({
    host: 'ec2-52-23-131-232.compute-1.amazonaws.com',
    user: 'qaogxlyxzxdhfp',
    password: "676ede45bdb7c235890cc6bf449dc10e9032fc4cf7c216ccbda3664e4681e1e9",
    database: 'd9t9uaqop9gdhi',
    port: 5432
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