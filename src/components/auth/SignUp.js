import * as React from "react";
import Card from "@mui/joy/Card";
import { Typography, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../store/auth-provider";
import db from "../../store/firebases/firebase";
import { onSnapshot, collection } from "firebase/firestore";

export function SignUp() {
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onSnapshot(collection(db, "Users"), (snap) => {
      console.log(snap.docs.map((doc) => doc.data()));
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPassRef.current.value) {
      return setError("PassWords do not Match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
    passwordRef.current.value = "";
    confirmPassRef.current.value = "";
    emailRef.current.value = "";
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
            Signup
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
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input
              type="password"
              required
              ref={confirmPassRef}
              style={{ width: "100%", padding: 10 }}
            />
            <input
              type="submit"
              value="SignUp"
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
          Already Have an Account?
          <Link to="/login">Login</Link>
        </Typography>
      </div>
    </div>
  );
}
