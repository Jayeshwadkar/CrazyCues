const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: '209.182.232.112',
  user: 'crazycue_admin',
  password: 'Crazy@2024#',
  database: 'crazycue_db',
  connectionLimit: 10,
  multipleStatements: true
});




//// DB Credentials for Production Only //////

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'crazycue_admin',
//     password: 'Crazy@2024#',
//     database: 'crazycue_db',
//   connectionLimit: 10,
//   multipleStatements: true
// });


///////////////



async function connectToDatabase() {
  try {
    await pool.getConnection();
    console.log("Database connected successfully !!");
  } catch (error) {
    console.error("DB Error: ", error);
  }
}

connectToDatabase();

module.exports = pool;

