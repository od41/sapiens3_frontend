import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {useParams} from 'react-router-dom';

import { Container, Row, Col, Image, Badge, Button, Spinner, Tabs, Tab  } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import AboutMember from 'components/profiles/AboutMember'
import RoomieCard from 'components/cards/RoomieCard'

import MyProfileTopPanel from 'components/profiles/MyProfileTopPanel';
import ApartmentCard from 'components/cards/ApartmentCard';

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

const dummy_favourites = [
  {
    first_name: 'Kessi',
    last_name: 'Darlington',
    age: 25,
    gender: 'female',
    display_photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg',
    connection_status: 'true',
  },
  {
    first_name: 'Elias',
    last_name: 'Bansi',
    age: 25,
    gender: 'male',
    display_photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg',
    connection_status: 'false',
  },
  {
    first_name: 'Malik',
    last_name: 'Kolade',
    age: 30,
    gender: 'male',
    display_photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg',
    connection_status: 'true',
  },
  {
    first_name: 'Mush',
    last_name: 'Abdulrahman',
    age: 25,
    gender: 'female',
    display_photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg',
    connection_status: 'false',
  },
]

const dummy_apartments = [
  {
    name: '4 bedroom apartment',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
    address: 'East Legon, Accra',
    price: '4000',
  },
]

function MyProfilePage() {
    const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [apartments, setApartments] = useState([]);

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
    setFavourites(dummy_favourites);
    setApartments(dummy_apartments);
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
        <MyProfileTopPanel profile={profile} />
        <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3 mt-4">
          <Tab eventKey="about" title="About">
            <AboutMember profile={profile} />
          </Tab>
          <Tab eventKey="favourites" title="Favourites">
            <Container>
              <Row>
                {favourites != null ? <>
                {favourites.map((fav, i) => <RoomieCard roomie={fav} key={`fav-${i}`}/> )}
                  </> : <p className='text-muted'>You haven't added any favourites</p>}
              </Row>
            </Container>
            
          </Tab>
          <Tab eventKey="apartments" title="Apartments">
          <Container>
              <Row>
                {apartments != null ? <>
                {apartments.map((fav, i) => <ApartmentCard apartment={fav} key={`fav-${i}`}/> )}
                  </> : <p className='text-muted'>You haven't added any apartements</p>}
              </Row>
            </Container>
          </Tab>
        </Tabs>
        
      </Row>
    </Container>
  )
}

export default MyProfilePage