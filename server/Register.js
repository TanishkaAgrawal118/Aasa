const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Weather",
});

async function RegisterCred(Username, Password, Name, City) {
  try {
    const query = `SELECT * FROM LoginAuthentication WHERE Username = ?`;
    const [rows] = await connection.promise().query(query, [Username]);

    if (rows.length > 0) {
      return 1;
    } else {
      const insertQuery = `INSERT INTO LoginAuthentication (Username, Password, Name, City) VALUES (?, ?, ?, ?)`;
      const [result] = await connection
        .promise()
        .query(insertQuery, [Username, Password, Name, City]);

      return result.affectedRows > 0 ? 2 : 0;
    }
  } catch (error) {
    console.error("Error in RegisterCred:", error);
    return 0;
  }
}

module.exports = { RegisterCred };
