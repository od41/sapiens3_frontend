import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {useParams} from 'react-router-dom';

import { Container, Row, Col, Image, Badge, Button, Spinner  } from 'react-bootstrap';

import avatar1 from 'assets/img/avatars/user1.png'
import defaultCover from 'assets/img/avatars/default_cover.png'

function MemberProfile() {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const apiUrl = `https://petcha.herokuapp.com/members/profile/${params.roomieId}`;
    axios.get(apiUrl).then((user) => {
      const userProfile = user.data;
      setProfile(userProfile);
    });
  }, [isLoading]);

  console.log(profile)

  if (!isLoading || !profile) {
    return <Container className="min-vh-100 d-flex justify-content-center align-items-center">
              <Row className="">
                <Spinner animation="border" className=""/>
                <span className="visually-hidden">Data loading...</span>
              </Row>
            </Container>
  }
  return (
    <>
      <Container>
        <Row>
            <Image fluid className="mw-100" src={defaultCover} />
          <Col>
          </Col>
        </Row> 
        <Row className='align-middle'>
            <Col xs={12} md={2}>
              <Image roundedCircle src={avatar1} />
            </Col>
            <Col xs={12} md={7} className='d-flex flex-column justify-content-center'>
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
            <Col xs={12} md={3} className='d-flex align-items-center'>
              <Button className='btn btn-dark w-100'>Send message</Button>
            </Col>
        </Row>
      </Container>
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
    </>
  )
}

export default MemberProfile