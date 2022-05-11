import React, {useState} from 'react'

import { Container, Row, Col, Image, Badge, Button, Offcanvas, Spinner  } from 'react-bootstrap';

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
    const [isLoading, setIsLoading] = useState(false);  
  const [isConnected, setIsConnected] = useState(false);

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

    const onConnectionRequest = (e) => {
      setIsLoading(true)
      setTimeout(() => {
        setIsConnected(true)
        setIsLoading(false)
      }, 3000);
    }

  return (
    <>
        <Container>
        <Row>
            <Image fluid className="mw-100" style={{marginBottom: '-6.0rem', marginTop: '-2.6rem', height: '200px', width:'auto', objectFit: 'cover'}} src={profile.banner_photo ? profile.banner_photo : defaultBanner} />
          <Col>
          </Col>
        </Row> 
        <Row className='px-5'>
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
              {isConnected ? <Button className='btn btn-success w-100' onClick={handleShow}>Talk to {`${profile.first_name}`}</Button> 
              : <Button className='btn btn-dark w-100' onClick={onConnectionRequest}>
                {isLoading ? <><Spinner animation="border" size='sm'/> Sending request...</> : 'Request Connection'}
              </Button> }
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