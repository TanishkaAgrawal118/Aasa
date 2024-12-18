const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Weather",
});

async function ActiveUsers(Username, Password) {
  try {
    const query = `SELECT * FROM LoginAuthentication WHERE Username = ? AND Password = ?`;
    const [rows] = await connection
      .promise()
      .query(query, [Username, Password]);

    if (rows.length > 0) {
      const user = rows[0];
      const insertQuery = `INSERT INTO ActiveUsers (Username, Active) VALUES (?, ?)`;
      const [insertResult] = await connection
        .promise()
        .query(insertQuery, [user.Username, true]);

      return insertResult.affectedRows > 0 ? 1 : 0;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error in ActiveUsers:", error);
    return 0;
  }
}

module.exports = { ActiveUsers };
