import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";


function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    //if (user) navigate("/home");
  }, [user, loading]);
  return (
      <>
    <h1 className = "text-center text-primary mt-5 mb-5">Reset Password</h1>
    <div className="bg-light w-50 mx-auto shadow-lg form-group">
      <div className="form-group m-5">
      <label className="mt-3 mb-3">Email</label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="btn btn-primary m-3"
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
      </>

  );
}
export default Reset;