const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Weather",
});

async function ActiveUserDetails() {
  try {
    const query = `SELECT * FROM ActiveUsers ORDER BY timestamp DESC LIMIT 1`;
    const [rows] = await connection.promise().query(query);

    if (rows.length > 0) {
      return rows[0];
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error retrieving active user details:", error);
    return 0;
  }
}

module.exports = { ActiveUserDetails };
