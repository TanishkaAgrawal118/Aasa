import { WiDaySnowWind } from "react-icons/wi";
import axios from "axios";
import React, { useState } from "react";
import "../css/Home.css";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";

function LoginData() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate instead of history

  function SendLoginData(event) {
    document.getElementById("Loginloader").style.display = "block";
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Register").style.display = "none";

    event.preventDefault();

    const data = { Username, Password };
    axios
      .post("http://localhost:3000/loginCredentials", data)
      .then((response) => {
        console.log(Username, Password);

        if (response.data === "successful") {
          axios
            .post("http://localhost:3000/activeUsers", data)
            .then((response) => {
              if (response.data === "added") {
                console.log("client: added to active list");
              }
            })
            .catch((error) => {
              console.error(error);
            });

          navigate("/dashboard"); // Navigate to the dashboard
        } else {
          document.getElementById("Loginloader").style.display = "none";
          document.getElementById("Submit").style.display = "block";
          document.getElementById("Register").style.display = "block";

          document.getElementById("IncorrectIdPwd").style.display = "block";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form className="Loginform" onSubmit={SendLoginData}>
      <input
        className="LoginUsername"
        type="text"
        placeholder="Username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="LoginPassword"
        type="password"
        placeholder="Password"
        required
        onChange={(b) => setPassword(b.target.value)}
      />
      <div className="IncorrectIdPwd" id="IncorrectIdPwd">
        Incorrect Username or password
      </div>
      <input className="Submit" id="Submit" type="submit" />
      <Link to="/register">
        <div className="Register" id="Register">
          Not a member? Sign In
        </div>
      </Link>
      <div className="Loginloader" id="Loginloader"></div>
    </form>
  );
}

export default function LoadLoginPage() {
  return (
    <>
      <div className="background">
        <div className="Welcome-section">
          <div className="welcome-empty-section">
            <WiDaySnowWind className="WeatherIcon" />
          </div>
          <div className="Welcome-heading">
            <div className="heading">
              Welcome to Weather<span style={{ color: "White" }}>Sense</span>
            </div>
            <div id="login">
              <LoginData />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
