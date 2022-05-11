import React, {useState} from 'react'

import { Container, Row, Col, Image, Badge, Button, Offcanvas  } from 'react-bootstrap';

import MessageContainer from 'components/messages/MessageContainer'

import defaultAvatar from 'assets/img/avatars/user1.png'
import defaultBanner from 'assets/img/avatars/default_cover.png'

const dummy_messages = [
  // {
  //   data: 'Lorem ipsum',
  //   sender: 'Elias Slim',
  //   receiver: 'Odafe Aror',
  //   date_sent: '12 May',
  //   status: 'true'
  // },
  // {
  //   data: 'Lorem ipsum',
  //   sender: 'Elias Slim',
  //   receiver: 'Odafe Aror',
  //   date_sent: '12 May',
  //   status: 'false'
  // }
]

function MemberProfileTopPanel({profile}) {
    const [dpIsLoaded, setDpIsLoaded] = useState(false);    

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cropImageStyle = {
        objectFit: 'cover',
        objectPosition: 'center',
        width: '15rem',
        height: '15rem',
        maxHeight: '210px',
        maxWidth: '210px',
        // marginBottom: '1rem',
    }

  return (
    <>
        <Container>
        <Row>
            <Image fluid className="mw-100" style={{marginBottom: '-6.0rem', height: '200px', width:'auto', objectFit: 'cover'}} src={profile.banner_photo ? profile.banner_photo : defaultBanner} />
          <Col>
          </Col>
        </Row> 
        <Row className='align-middle'>
            <Col xs={12} md={2}>
              <img 
                    className='rounded img-thumbnail rounded-circle' 
                    alt="user display" 
                    style={dpIsLoaded ? {...cropImageStyle } : {...cropImageStyle, display: 'none'}} 
                    src={profile.display_photo} 
                    onLoad={() => setDpIsLoaded(true)} 
                />
              {!dpIsLoaded ? <img roundedCircle alt="default user display" src={defaultAvatar} /> : <></>}
            </Col>
            <Col xs={12} md={7} className='d-flex flex-column justify-content-end text-capitalize'>
              <h3>{`${profile.first_name} ${profile.last_name}`}</h3>
              <Row className=''>
                <Col md={12}>
                  <div className='d-flex justify-content-start'>
                    <Badge pill bg="light" text="dark" className='text-capitalize'>{profile.gender}</Badge>
                    <Badge pill bg="light" text="dark" className='ml-3 text-capitalize'>{profile.age} years</Badge>
                    <Badge pill bg="light" text="dark" className='ml-3 text-capitalize'>{profile.preferred_location}</Badge>

                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={3} className='d-flex flex-column align-items-center justify-content-end'>
              <Button className='btn btn-dark w-100' onClick={handleShow}>Send message</Button>
            </Col>
        </Row>
      </Container>

      
      {/* offcanvas */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{`${profile.first_name} ${profile.last_name}`}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {<MessageContainer messages={dummy_messages} />}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default MemberProfileTopPanel