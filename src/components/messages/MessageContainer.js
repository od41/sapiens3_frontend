import React from 'react'
import Message from 'components/messages/Message'

import { Link } from 'react-router-dom';
import {Form, Col, Button, Row, Container } from 'react-bootstrap';

function MessageContainer({messages}) {
  return (
    <Container>
      <Row>
        {messages.length !== 0 ? messages.map((message, i) => <Message message={message} />) 
          : <>You don't have any messages!</>  
        }
      </Row>

    <Container>
      <Row className="">
        <Form className="position-absolute w-100 " style={{bottom: 32, left: 0}}>
          <Container>
            <Row>
              <Form.Group as={Col} xs={12} md={9} className="px-0" controlId="formEmailAddress">
                <Form.Control type="text" className="w-100" placeholder="Start typing" />
              </Form.Group>
              
              <Form.Group as={Col} xs={12} md={3} className="pe-0" controlId="formPassword">
                <Button variant="dark" className="w-100" type="submit">
                  Send
                </Button>
              </Form.Group>
            </Row>
          </Container>
        </Form>
      </Row>
    
    </Container>

    
      
    </Container>
  )
}

export default MessageContainer