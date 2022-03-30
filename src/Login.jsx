import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle, logout } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const signOutUser = () => {
  logout(auth).then(() => {
  console.log("Sign-out successful");
}).catch((error) => {
  console.log("Sign-out failed");
});}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // trigger a loading screen
      return;
    }
    if (user) {
        // working, fixed it
        document.getElementById("sign-in").innerHTML= "Signed In"
    }
  }, [user, loading]);
  if (!user){
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
} else {
  return(
    <>
    <h1 className = "text-center text-primary mt-5 mb-5">Do you want to sign out from your account?</h1>
    <div className="bg-light w-50 mx-auto shadow-lg d-flex align-items-center ">
    <div className="form-group m-5">
    <button
        className="btn btn-secondary ml-3 mb-3"
        onClick={() => signOutUser()}
      >Sign Out</button>

      <button
        className="btn btn-primary ml-5 mb-3"
        onClick={() => navigate("/")}
      >Go back to home screen</button>
      </div>
  </div> 
  </> 
  )
}
  
}
export default Login;