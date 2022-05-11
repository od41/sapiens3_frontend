import React from 'react'

import { Container, Row, Col, Badge, } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function AboutMember({profile}) {
  return (
    <Container>
        <Row className="mt-5">
        <Col xs={12} md={6}>
            <div className='w-100'>
            <h5>About</h5>
            <p className=''>{profile.description == null ? `${profile.first_name} hasn't added a bio yet...` : profile.description}</p>
            <div className='d-flex justify-content-start'>
                <Badge pill bg="light" text="dark">{profile.education_level}</Badge>
                <Badge pill bg="light" text="dark" className='ml-3'>{profile.occupation}</Badge>
                <Badge pill bg="light" text="dark" className='ml-3'>{profile.beliefs}</Badge>

            </div>
            </div>

            <div className='w-100 mt-3'>
            <h5>Interests</h5>
            <div className='d-flex justify-content-start'>
                {profile.interests == null ? <p>{`${profile.first_name} hasnt added any interests yet...`}</p> 
                : profile.interests.map((interest, i) => <Badge pill bg="light" text="dark" key={`interest-${i}`}>{interest}</Badge>)
                }

            </div>
            </div>
            
        </Col>
        <Col xs={12} md={6}>
            {/* <h4>Apartments liked</h4> */}
        </Col>
        </Row>
    </Container>
  )
}

export default AboutMember