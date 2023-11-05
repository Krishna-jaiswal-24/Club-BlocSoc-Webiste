import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD0m_OZS3jz0OSxaRuQ6vOpzT-qsTJVbYY",
  authDomain: "blocsocwebsite.firebaseapp.com",
  projectId: "blocsocwebsite",
  storageBucket: "blocsocwebsite.appspot.com",
  messagingSenderId: "475866583412",
  appId: "1:475866583412:web:d8d47dcf7abce7eda51c21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const Signup = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Signed up successfully!');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="row align-item-center justify-content-center text-white mt-5">
        <div className="col-lg-4 col-md-6 col-sm-8 col-10">
          <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSignUp}>
              <h1 className="h3 mb-3 fw-normal">
                Please sign up for further updates!
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
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="btn btn-primary w-100 py-2" type="submit">
                Sign up
              </button>
              <p className="mt-3 text-body-primary text-center">
                already have an account? <a href="#" className="text-info">Login</a>
              </p>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Signup;
