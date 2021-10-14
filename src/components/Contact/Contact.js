import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact text-white d-flex">

      <Form className="w-50 my-5">
        <h2>Get in touch</h2>
        <p className="bg-dark mx-4">Have a question or just want to say hi? We'd love to hear from you.</p>
        <Row className="m-2">
          <Col>
            <Form.Control placeholder="Enter your name" />
          </Col>
          <Col>
            <Form.Control placeholder="Email" />
          </Col>
        </Row>
        <Row className="mx-2 my-3">
          <Col>
            <Form.Control placeholder="Subject" />
          </Col>
        </Row>
        <Row className="m-3">
          <Form.Control
            as="textarea"
            placeholder="Enter your message"
            style={{ height: '100px' }}
          />
        </Row>
        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;