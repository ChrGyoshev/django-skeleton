import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Register() {
  return (
    <Container
      id="container"
      className="mt-5 d-flex justify-content-center align-items-center"
    >
      <Form className="p-5 border rounded">
        <h2 className="mb-4">Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="d-flex justify-content-center align-items-center">
          {" "}
          {/* Centering the button horizontally and vertically */}
          <Button variant="primary" type="button">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Register;
