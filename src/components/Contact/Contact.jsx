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

// Query
import queries from "./queryType";

// Axios
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    Fname: "",
    Lname: "",
    service: "GRC",
    email: "",
    city: "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = () => {
    // console.log(form);
    alert("Your email has been sent successfully!");

    const bodyFormData = new FormData();

    bodyFormData.set("Fname", form.Fname);
    bodyFormData.set("Lname", form.Lname);
    bodyFormData.set("email", form.email);
    bodyFormData.set("city", form.city);
    bodyFormData.set("country", form.country);
    bodyFormData.set("message", form.message);
    bodyFormData.set("phone", form.phone);
    bodyFormData.set("service", form.service);

    axios
      .post("https://www.ubconsulting.in/api/Api/sendContact/", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      sendEmail();
      // event.preventDefault();
      // alert("Your message has been sent!");
    }

    // event.preventDefault();

    setValidated(true);
  };

  return (
    <div className="contact-box-container">
      <div className="contact-box">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* <h1 className="contact-heading">For Enquiries . . .</h1> */}
          <div>
            <Row>
              <Col lg={4}>
                <h1 className="contact-heading">Contact Us</h1>
              </Col>
              <Col lg={4}>
                <div className="address">
                  <i className="fa fa-address-card-o " aria-hidden="true"></i>
                  <br />
                  <span>
                    Emaar Plaza, Golf Course ext. Road, Sector 65, Gurgaon
                  </span>
                </div>
              </Col>
              <Col>
                <i className="fa fa-envelope " aria-hidden="true"></i>
                &nbsp;&nbsp;
                <span>info@ubconsulting.in</span>
                <br />
                <span>
                  <i className="fa fa-phone " aria-hidden="true"></i>
                  &nbsp;&nbsp; 0124 4246471
                  <br />
                  <i className="fa fa-phone " aria-hidden="true"></i>
                  &nbsp;&nbsp; +91 9313 489 918
                </span>
              </Col>
            </Row>
          </div>

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
                    name="Fname"
                    onChange={handleChange}
                    defaultValue={form.fname}
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
                    name="Lname"
                    onChange={handleChange}
                    // defaultValue="Otto"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
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
              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomPhoneNum"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      placeholder="9999912345"
                      aria-describedby="inputGroupPrepend"
                      name="phone"
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid Phone Number.
                    </Form.Control.Feedback>
                  </InputGroup>
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
                    type="email"
                    placeholder="abc@gmail.com"
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
              <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                <Form.Label>Query Type</Form.Label>
                <Form.Control
                  name="service"
                  onChange={handleChange}
                  as="select"
                >
                  {queries.map((query) => {
                    return <option key={query.id}>{query.data}</option>;
                  })}

                  {/* <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option> */}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="Type Your Message here ..."
                  name="message"
                  onChange={handleChange}
                />

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
