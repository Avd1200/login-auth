import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../firebase";
import "../style.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/landing");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <div className="content shadow">
          <div className="logo">
            <img src="https://svgshare.com/i/_go.svg" alt="" />
          </div>

          <div className="image"></div>

          <div className="text">
            Start for free & get <br />
            attractive offers today !
          </div>
        </div>
        <div id="form" className="shadow">
          <div className="shadow rounded" >
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>
              {error && <Alert variant="danger">Failed to login</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-3"  type="submit">
                  Sign in
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                  <Link to="/forgot-password">Forgot Password</Link>
              </div>
            </Card.Body>
          </Card>
          </div>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup"><strong>Sign up</strong></Link>
          </div>
        </div>
      </div>
    </>
  );
}
