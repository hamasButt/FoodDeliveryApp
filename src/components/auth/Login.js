import * as React from "react";
import Card from "@mui/joy/Card";
import { Typography, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../../store/auth-provider";

export function Login() {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      emailRef.current.value = "";
      passwordRef.current.value = "";
      navigate("/");
    } catch {
      setError("Failed to Login");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ width: 500 }}>
        <Card variant="outlined" sx={{ minWidth: "500px" }}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            LogIn
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              required
              ref={emailRef}
              style={{ width: "100%", padding: 10 }}
            />
            <label htmlFor="PassWord">PassWord</label>
            <input
              type="password"
              required
              ref={passwordRef}
              style={{ width: "100%", padding: 10 }}
            />
            <input
              type="submit"
              value="Login"
              disabled={loading}
              style={{
                width: "100%",
                padding: 15,
                marginTop: 10,
                background: "skyblue",
                color: "#FFF",
                fontSize: "20px",
              }}
            />
            <p style={{ textAlign: "center", padding: 3 }}>
              <Link to={"/"}>Forgot Password</Link>
            </p>
          </form>
        </Card>
        <Typography style={{ textAlign: "center" }} variant="h6">
          Need An Account?
          <Link to="/sign-up">SignUp</Link>
        </Typography>
      </div>
    </div>
  );
}
