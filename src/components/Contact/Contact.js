import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact text-white d-flex justify-content-center">

      <Form className="w-25 m-5">
        <h2 className="bg-dark py-3 w-75 mx-auto rounded">Get in touch</h2>
        <p className="bg-dark py-3 mx-4 rounded">Have a question or just want to say hi? We'd love to hear from you.</p>
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
        <Button variant="outline-light px-4">Submit</Button>
      </Form>

      <Card className="w-25 m-5" style={{ width: '18rem', height: '500px' }}>
        <Card.Body>
          <div className="mb-2 text-dark p-5 d-flex flex-column">
            <h4 className="mt-2">New York Office</h4>
            <h6>Maypole Crescent 70-80 Upper St Norwich NR2 1LT</h6>

            <h4 className="mt-5">Email us directly</h4>
            <h6>support@jpo.com</h6>
            <h6>info@jpo.com</h6>

            <h4 className="mt-5">Phone</h4>
            <h6>+(426) 742 26 44</h6>
            <h6>+(224) 762 442 32</h6>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;