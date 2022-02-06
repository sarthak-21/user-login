import React, { useState, useEffect } from "react";
import './Login.css';
import { Row, Col } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <div>
      <Row className="m-0">
        <Col lg={5} className="p-0">
        <div className="login">
          <div className="login__container">
            <h1 className="welcome">Welcome back!</h1>
            <label className="label">
              Email
            </label>
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
            <label className="label">
              Password
            </label>
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <div className="forgot">
              <Link to="/reset">Forgot your password?</Link>
            </div>
            <button
              className="login__btn"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
            <span>or</span>
            <button className="login__btn login__google" onClick={signInWithGoogle}>
              <img className="google-logo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="signInWithGoogle" />
              <text>Sign in with Google</text>
            </button>

            <div className="no_account_text">
              Don't have an account?
            </div>
            <Link to="/register">
              <button className="register_button">Create account</button>
            </Link>
          </div>
        </div>
        </Col>
        <Col lg={7} className="p-0">
          <div className="image-div">
            <img className="image" src="https://images.pexels.com/photos/1577881/pexels-photo-1577881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="photo" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
