import React from 'react'
import { Container, Row, Col, Image, Badge, Button, ToggleButton, Spinner, ButtonGroup,
  Form,
  } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import loginImage from 'assets/img/scenery/login.png'

function CreateAccount() {
  const heading2 = {
    fontWeight: '600',
    fontSize: '32px',
    color: '#0a0a0a'
  }

  return (
    <>
    <header className="masthead">
       <Container>
           <Row className="align-items-center">
               <Col md={6} className="col-md-6" style={{borderRadius: "20"}}>
                   <h3 style={ {...heading2, marginTop: "123px"}} >Save time, money, and build friendship </h3>

                   <Form>
                     <Row className="">
                         <Form.Group as={Col} className="mb-3" controlId="formFirstName">
                           <Form.Label>First name</Form.Label>
                           <Form.Control type="text" placeholder="Enter your first name" />
                         </Form.Group>

                         <Form.Group as={Col}  className="mb-3" controlId="formLastName">
                           <Form.Label>Last name</Form.Label>
                           <Form.Control type="text" placeholder="Enter your last name" />
                         </Form.Group>
                       </Row>

                        <Form.Group as={Col} className="mb-3" controlId="formEmailAddress">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-5" controlId="formPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Enter password" />
                          <Form.Text as={Col} className="text-muted p-2 border  bg-light rounded">
                            <div>Minimum 8 characters</div>
                            <div>Must contain an uppercase character</div>
                            <div>Must include a number</div>
                            <div>Must include a special character</div>
                          </Form.Text>
                        </Form.Group>
                         
                         <Button variant="dark" type="submit">
                           Create an Account
                         </Button>

                         <Form.Text as={Col} className="text-muted text-wrap mt-4 mb-4">
                            By creating an account, you agree to the <Link to="/privacy-policy" className='text-dark fw-bold text-decoration-none'>Privacy Policy</Link> and <Link to="/terms-and-conditions" className='text-dark fw-bold text-decoration-none'>Terms &amp; Conditions</Link> of using 
                          </Form.Text>

                          <Link to="/login" as={Button} className='text-dark fw-bold text-center text-decoration-none'>Login to an existing account</Link>
                     </Form>
               </Col>
               <div className="col-md-6">
                 <img className="img-thumbnail" alt="promo banner" data-aos="fade-up" data-aos-duration="100" src={loginImage} />
               </div>
           </Row>
       </Container>
   </header>
   
   </>
  )
}

export default CreateAccount