import React, {useState} from 'react'
import { Container, Row, Col, Button, Form, Spinner
  } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';

import loginImage from 'assets/img/scenery/login.png'

function Login() {
  const [isLoading, setLoading] = useState(false);

  let navigate = useNavigate();

  const onSubmitAfterDelay = (e) => {
    e.preventDefault();
    setLoading(true)
    let data = new FormData(e.target)
    let urlEncoded = new URLSearchParams(data)
    setTimeout(() => {
      navigate("/my-profile", { state: urlEncoded })
    }, 2000);
  }

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
                   <h3 style={ {...heading2, marginTop: "123px"}} className="mb-4" >We exist to connect you with your ideal flatmate. </h3>

                   <Form onSubmit={onSubmitAfterDelay}>

                        <Form.Group as={Col} className="mb-3" controlId="formEmailAddress">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="youremail@email.com" value={"malik.kolade@gmail.com"} />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-5" controlId="formPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Your Password" value="adefaultpassword" />
                          <Form.Text as={Col} className="text-muted p-2 border  bg-light rounded">
                            <div>Minimum 8 characters</div>
                          </Form.Text>
                        </Form.Group>
                         
                        <Form.Group as={Col} className="mb-5" controlId="formPassword">
                          <Button variant="dark" className="w-50" type="submit">
                            {isLoading ? <><Spinner animation="border" size='sm'/> Loading...</> : 'Login'}
                          </Button>
                          <br />
                          <br />
                          <br />
                          <Link to="/forgot-password" as={Button} className='text-muted text-dark fw-bold text-center text-decoration-none'>Forgot password? Recover here</Link>
                        </Form.Group>

                          <div>
                            <Link to="/create-account" as={Button} className='text-dark fw-bold text-center text-decoration-none'>
                              Create a new account
                            </Link>
                          </div>
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

export default Login