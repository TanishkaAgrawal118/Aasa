const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Weather",
});

async function LoginCred(Username, Password) {
  try {
    const query = `SELECT * FROM LoginAuthentication WHERE Username = ? AND Password = ?`;
    const [rows] = await connection
      .promise()
      .query(query, [Username, Password]);

    if (rows.length > 0) {
      return 1;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error in LoginCred:", error);
    return 0;
  }
}

module.exports = { LoginCred };
