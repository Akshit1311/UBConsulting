import React, { useState } from "react";

// BS
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

// Styles
import "../Contact/contact-styles.css";
import "./career-styles.css";

// Email JS
import emailjs from "emailjs-com";

function Career() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      sendEmail();
      event.preventDefault();
      alert("Your application has been sent!");
    }

    setValidated(true);
  };

  const sendEmail = () => {
    const templateId = "application";
    const templateParams = form;

    emailjs
      .send("gmail", templateId, templateParams, "user_3M6dBzMyG5xfYAuyGQnT9")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="career-box-container">
      <div className="contact-box">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1 className="contact-heading">Apply . . .</h1>
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
                    name="fname"
                    onChange={handleChange}
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
                    name="lname"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <br />
              <br />
              <Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Country"
                    name="country"
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Country.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <br />
              <br />
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
                    name="email"
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <br />
              <br />

              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>CV Upload</Form.Label>
                <Form.File
                  id="custom-file-translate-scss"
                  label="Custom file input"
                  lang="en"
                  custom
                />
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

export default Career;
