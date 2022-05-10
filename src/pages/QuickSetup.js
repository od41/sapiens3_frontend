import React, {useState} from 'react'
import { Container, Row, Col, Image, Badge, Button, ToggleButton, Spinner, ButtonGroup  } from 'react-bootstrap';

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
                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group mb-3"><label className="form-label">Date of Birth</label>
                                  <input className="form-control" type="text" style={{borderRadius: "20px"}} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-3"><label className="form-label">Display Image</label>
                                  <input className="form-control" type="text" style={{borderRadius: "16px"}} />
                                </div>
                            </div>
                        </div>
                        <Row className="" style={{textAlign: "left"}}>
                            <Col sm={1} className="col-sm-1 col-lg-11 col-xl-10" style={{width: "auto"}}>
                                <div className="form-group mb-3"><label className="form-label">Gender</label></div>
                                <div className="form-group mb-3" style={{textAlign: "center", width: "556px"}}>
                                    <ButtonGroup className="btn-group" role="group" style={{textAlign: "center", borderRadius: 0}}>
                                      {gendersList.map((gender, i) => <ToggleButton 
                                        key={i}
                                        id={`radio-${i}`}
                                        type="radio"
                                        // variant={i % 2 ? 'outline-success' : 'outline-danger'}
                                        variant={'outline-dark'}
                                        width="120px"
                                        name="radio"
                                        value={gender.value}
                                        checked={genderValue === gender.value}
                                        onChange={(e) => setGenderValue(e.currentTarget.value)}
                                      >{gender.name}</ToggleButton>)}
                                      
                                    </ButtonGroup>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col sm={6} lg={12} className="col-sm-6 col-lg-12">
                                <div className="form-group mb-3"><label className="form-label">Desired Location</label>
                                  <input className="form-control" type="text" style={{borderRadius: "20px"}} />
                                </div>
                            </Col>
                        </Row>
                    </form>
                    <div className="getting-started-info"><button className="btn btn-outline-primary btn-lg" type="button" style={{"background: var(--bs-gray-dark);color: var(--bs-white);border-radius: 15px;text-align: center;padding-right: 25px;margin-top: 11px;":""}}>Find a roomie</button>
                        <p></p>
                    </div>
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