import React, {useState} from 'react'
import { Container, Row, Col, Image, Badge, Button, ToggleButton, Spinner, ButtonGroup,
  Form,
  } from 'react-bootstrap';

import quickSetup from 'assets/img/scenery/quick_setup.jpg'

function QuickSetup() {
  const [checked, setChecked] = useState(false);
  const [genderValue, setGenderValue] = useState('male');

  const heading2 = {
    fontWeight: '600',
    fontSize: '32px',
    color: '#0a0a0a'
  }

  const gendersList = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
  ];

  return (
    
    <>
     <header className="masthead">
        <Container>
            <Row className="align-items-center">
                <Col md={6} className="col-md-6" style={{borderRadius: "20"}}>
                    <h3 style={ {...heading2, marginTop: "123px"}} >Find A Roomie</h3>
                    <div className="getting-started-info">
                        <p>Fill this form and we will get you started right away.</p>
                    </div>
                    <Form>
                      <Row className="">
                          <Form.Group as={Col} className="mb-3" controlId="formDateofBirth">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control type="date" placeholder="Enter date of birth" />
                          </Form.Group>

                          <Form.Group as={Col}  className="mb-3" controlId="formDispayPhoto">
                            <Form.Label>Display Image</Form.Label>
                            <Form.Control type="file" placeholder="Upload display photo" />
                          </Form.Group>
                        </Row>
                        <Form.Group as={Col}  className="mb-3" controlId="formGender">
                            <Form.Label>Gender</Form.Label>
                            <ButtonGroup className="btn-group d-grid gap-2 d-md-block" role="group" style={{textAlign: "center", borderRadius: 0}}>
                              {gendersList.map((gender, i) => <ToggleButton 
                                key={i}
                                className="w-50"
                                id={`radio-${i}`}
                                type="radio"
                                // variant={i % 2 ? 'outline-success' : 'outline-danger'}
                                variant={'outline-dark'}
                                // width="120px"
                                name="radio"
                                value={gender.value}
                                checked={genderValue === gender.value}
                                onChange={(e) => setGenderValue(e.currentTarget.value)}
                              >{gender.name}</ToggleButton>)}
                              
                            </ButtonGroup>
                          </Form.Group>

                          <Form.Group as={Col} className="mb-3" controlId="formDesiredLocation">
                            <Form.Label>Desired Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter your desired location" />
                          </Form.Group>

                          <Form.Group className="mb-4" controlId="formHasApartment">
                            <Form.Check type="checkbox" className="text-dark" label="I have an apartment and I am looking for a co-tenant" />
                          </Form.Group>
                          
                          <Button variant="dark" type="submit">
                            Find a roomie
                          </Button>
                      </Form>
                </Col>
                <div className="col-md-6">
                  <img className="img-thumbnail" alt="promo banner" data-aos="fade-up" data-aos-duration="100" src={quickSetup} />
                </div>
            </Row>
        </Container>
    </header>
    
    </>
  )
}

export default QuickSetup