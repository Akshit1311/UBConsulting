import React, { useState } from "react";

// BS
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

// Styles
import "./contact-styles.css";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="contact-box-container">
      <div className="contact-box">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1 className="contact-heading">Contact Us</h1>
          <hr />

          <br />

          <Form.Row>
            <Col sm={12} lg={6}>
              <Row>
                <Form.Group
                  as={Col}
                  md="6"
                  sm="12"
                  controlId="validationCustom01"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="Mark"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  sm="12"
                  controlId="validationCustom02"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue="Otto"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Col>

            <Col>
              <Form.Group as={Col} md="12" controlId="validationCustomEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" aria-label="With textarea" />

                <Form.Control.Feedback type="invalid">
                  Please enter an appropriate message.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Form.Row>

          {/* <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group> */}
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
