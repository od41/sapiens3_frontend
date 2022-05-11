import React, {useState} from 'react'

import { Container, Row, Col, Image, Badge, Button  } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import defaultAvatar from 'assets/img/avatars/user1.png'
import defaultBanner from 'assets/img/avatars/default_cover.png'

function MyProfileTopPanel({profile}) {
    const [dpIsLoaded, setDpIsLoaded] = useState(false);

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
            <Image fluid className="mw-100" style={{marginBottom: '-2.0rem', height: '200px', width:'auto', objectFit: 'cover'}} src={profile.banner_photo ? profile.banner_photo : defaultBanner} />
          <Col>
          </Col>
        </Row> 
        <Row className=''>
            <Col xs={12} md={2}>
              <img 
                className='rounded img-thumbnail rounded-circle' 
                alt="user display" 
                style={dpIsLoaded ? {...cropImageStyle } : {...cropImageStyle, display: 'none'}} 
                src={profile.display_photo} 
                onLoad={() => setDpIsLoaded(true)} 
              />
              {!dpIsLoaded ? <img className='img-thumbnail' alt="default user display" src={defaultAvatar} /> : <></>}
            </Col>
            <Col xs={12} md={7} className='d-flex flex-column justify-content-end'>
              <h3>{`${profile.first_name} ${profile.last_name}`}</h3>
              <Row className=''>
                <Col md={12}>
                  <div className='d-flex justify-content-start'>
                    <Badge pill bg="light" text="dark">{profile.gender}</Badge>
                    <Badge pill bg="light" text="dark" className='ml-3'>{profile.age} years</Badge>
                    <Badge pill bg="light" text="dark" className='ml-3'>{profile.preferred_location}</Badge>

                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={3} className='d-flex flex-column align-items-center justify-content-end'>
              <Link as={Button} to="/find-roomie" className='btn btn-dark w-100 mb-3'>Find Apartment</Link>
              <Link as={Button} variant="outline-dark" to="/buy-connect" className='btn btn-outline-dark w-100'>Buy Connect</Link>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyProfileTopPanel