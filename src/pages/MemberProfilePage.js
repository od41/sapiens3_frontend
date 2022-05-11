import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {useParams} from 'react-router-dom';

import { Container, Row, Col, Image, Badge, Button, Spinner  } from 'react-bootstrap';

import MemberProfileTopPanel from 'components/profiles/MemberProfileTopPanel';

const dummy_profile = {
  first_name: 'Kessi',
  last_name: 'Darlington',
  age: 28,
  preferred_location: 'Madina, Accra',
  gender: 'female',
  display_photo: 'https://images.pexels.com/photos/1006195/pexels-photo-1006195.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  banner_photo: '',
  description: "I'm a lawyer who's peace loving and loves to sleep and swim, not at the same time",
  education_level: 'university',
  occupation: 'lawyer',
  beliefs: 'christianity',
  preferred_address: 'Madina, Accra',
  interests: ['swimming', 'badmington'],
  budget: 1200,
  role: ''
}

function MemberProfilePage() {

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
          <Row className="mt-5 px-5">
            <Col xs={12} md={6}>
              <div className='w-100'>
                <h5>About</h5>
                <p className=''>{profile.description == null ? `${profile.first_name} hasn't added a bio yet...` : profile.description}</p>
                <div className='d-flex justify-content-start'>
                  <Badge pill bg="light" text="dark" className='text-capitalize'>{profile.education_level}</Badge>
                  <Badge pill bg="light" text="dark" className='ml-3 text-capitalize'>{profile.occupation}</Badge>
                  <Badge pill bg="light" text="dark" className='ml-3 text-capitalize'>{profile.beliefs}</Badge>

                </div>
              </div>

              <div className='w-100 mt-3'>
                <h5>Interests</h5>
                <div className='d-flex justify-content-start'>
                  {profile.interests == null ? <p>{`${profile.first_name} hasnt added any interests yet...`}</p> 
                  : profile.interests.map((interest, i) => <Badge pill bg="light" text="dark" className="text-capitalize" key={`interest-${i}`}>{interest}</Badge>)
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