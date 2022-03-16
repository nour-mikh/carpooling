import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // perhaps trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);
  return (
      <>
    <h1 className = "text-center text-primary mt-5 mb-5">Sign In</h1>
    <div className="bg-light w-50 mx-auto shadow-lg ">
      <div className="form-group m-5">
      <label className="mt-3 mb-3">Email address</label>
        <input
          type="text"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <label className="mb-3">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="btn btn-primary m-3"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="btn btn-secondary m-3" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div className="mb-2">
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
    </>
  );
}
export default Login;