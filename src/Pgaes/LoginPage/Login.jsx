import React, { useState } from "react";
import app from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Initialize Firebase
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false); // state to track login/signup mode
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/events");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/events");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row align-item-center justify-content-center text-white mt-5">
          <div className="col-lg-4 col-md-6 col-sm-8 col-10">
            <main className="form-signin w-100 m-auto">
              <form onSubmit={isSignup ? handleSignUp : handleLogin}>
                <h1 className="h3 mb-3 fw-normal">
                  {isSignup ? "Please sign up for further updates!" : "Welcome back! Please log in."}
                </h1>
                <div className="form-floating text-black mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating text-black">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
                  {isSignup ? "Sign up" : "Log in"}
                </button>
                <p className="mt-3 text-body-primary text-center">
                  {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                  <a
                    href=""
                    className="text-info"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSignup(!isSignup);
                    }}
                  >
                    {isSignup ? "Login" : "Sign up"}
                  </a>
                </p>
              </form>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
