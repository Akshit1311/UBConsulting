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
// import emailjs from "emailjs-com";

// Axios
import axios from "axios";

function Career() {
  const [form, setForm] = useState({
    Fname: "",
    Lname: "",
    city: "",
    country: "",
    email: "",
    myFile: {},
  });

  const [fileName, setFileName] = useState("File Name");

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    // if (name === "myFile") {
    //   console.log(files[0]);
    let file;
    if (name === "myFile") {
      setFileName(files[0].name);
      file = files[0];
    }

    //   setForm({
    //     ...form,
    //     myFile: files[0],
    //   });
    // }

    // console.log(file);
    let formdata = {
      ...form,
      [name]: name === "myFile" ? file : value,
    };
    setForm(formdata);
    // console.log(formdata);
    // setTimeout(() => {
    // }, 1000);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      sendEmail();
      // alert("Your application has been sent!");
    }

    setValidated(true);

    console.log(event);
  };

  // const sendEmail = () => {
  //   const templateId = "application";
  //   const templateParams = form;

  //   emailjs
  //     .send("gmail", templateId, templateParams, "user_3M6dBzMyG5xfYAuyGQnT9")
  //     .then(
  //       (response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       (err) => {
  //         console.log("FAILED...", err);
  //       }
  //     );
  // };
  const sendEmail = () => {
    // console.log(form);
    alert("Your email has been sent successfully!");

    const bodyFormData = new FormData();

    bodyFormData.set("Fname", form.Fname);
    bodyFormData.set("Lname", form.Lname);
    bodyFormData.set("city", form.city);
    bodyFormData.set("country", form.country);
    bodyFormData.set("email", form.email);
    bodyFormData.set("myFile", form.myFile);

    axios
      .post("https://www.ubconsulting.in/api/Api/sendDetails/", bodyFormData, {
        headers: {
          // "Content-Type": "application/json",
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
                    name="Fname"
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
                    name="Lname"
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
              <br />
              <br />

              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>CV Upload</Form.Label>
                <Form.File
                  id="custom-file-translate-scss"
                  label={fileName}
                  name="myFile"
                  type="file"
                  lang="en"
                  onChange={handleChange}
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
