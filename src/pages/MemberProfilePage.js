import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {useParams} from 'react-router-dom';

import { Container, Row, Col, Image, Badge, Button, Spinner  } from 'react-bootstrap';

import MemberProfileTopPanel from 'components/profiles/MemberProfileTopPanel';

const dummy_profile = {
  first_name: 'Odafe',
  last_name: 'Aror',
  age: 25,
  preferred_location: 'Madina, Accra',
  gender: 'male',
  display_photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg',
  banner_photo: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere donec mattis vestibulum amet, nisl aliquet pellentesque pellentesque enim.',
  education_level: 'university',
  occupation: 'product designer',
  beliefs: 'christianity',
  preferred_address: 'Madina, Accra',
  interests: ['swimming', 'badmington'],
  budget: 1200,
  role: ''
}

function MemberProfilePage() {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({});

  // useEffect(() => {
  //   const apiUrl = `https://petcha.herokuapp.com/members/profile/${params.roomieId}`;
  //   axios.get(apiUrl).then((user) => {
  //     const userProfile = user.data;
  //     setProfile(userProfile);
  //     setIsLoading(false);
  //   });
  // }, [isLoading]);

  useEffect(() => {
    setProfile(dummy_profile);
  }, [])

  // if (isLoading || !profile) {
    if (false) {
    return <Container className="min-vh-100 d-flex justify-content-center align-items-center">
              <Row className="">
                <Spinner animation="border" className=""/>
                <span className="visually-hidden">Data loading...</span>
              </Row>
            </Container>
  }
  return (
    <Container className="min-vh-100" >
      <Row>
        <MemberProfileTopPanel profile={profile} />
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
      </Row>
    </Container>
  )
}

export default MemberProfilePage