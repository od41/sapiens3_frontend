import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {useParams} from 'react-router-dom';

import { Container, Row, Col, Image, Badge, Button, Spinner, Tabs, Tab  } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import AboutMember from 'components/profiles/AboutMember'
import RoomieCard from 'components/Cards/RoomieCard'

import MyProfileTopPanel from 'components/profiles/MyProfileTopPanel';
import ApartmentCard from 'components/Cards/ApartmentCard';

const dummy_profile = {
  first_name: 'Malik',
  last_name: 'Kolade',
  age: 25,
  preferred_location: 'Madina, Accra',
  gender: 'male',
  display_photo: 'https://images.pexels.com/photos/2698935/pexels-photo-2698935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  banner_photo: '',
  description: 'As the cookie that crumbles is sweet, so is the man that stumbles and stands will overcome defeat',
  education_level: 'university',
  occupation: 'product designer',
  beliefs: 'islam',
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
    display_photo: 'https://images.pexels.com/photos/1006195/pexels-photo-1006195.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    connection_status: 'true',
  },
  {
    first_name: 'Elias',
    last_name: 'Bansi',
    age: 29,
    gender: 'male',
    display_photo: 'https://images.pexels.com/photos/1605399/pexels-photo-1605399.jpeg?auto=compress&cs=tinysrgb&w=600',
    connection_status: 'false',
  },
  {
    first_name: 'Odafe',
    last_name: 'Aror',
    age: 30,
    gender: 'male',
    display_photo: 'https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    connection_status: 'true',
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
        <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3 mt-4 px-5">
          <Tab eventKey="about" className='text-dark px-4' title="About">
            <AboutMember profile={profile} />
          </Tab>
          <Tab eventKey="favourites" title="Favourites" style={{color: '#0a0a0a !important'}}>
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