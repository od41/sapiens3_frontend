import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Container, Row, Spinner } from 'react-bootstrap';

import RoomieCard from 'components/Cards/RoomieCard'

const dummy_roomies = [
  {
    id: 1,
    first_name: 'Kessi',
    last_name: 'Darlington',
    age: 28,
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
  {
    first_name: 'Mush',
    last_name: 'Abdulrahman',
    age: 25,
    gender: 'female',
    display_photo: 'https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    connection_status: 'false',
  },
  {
    first_name: 'Sosu',
    last_name: 'Alfred',
    age: 28,
    gender: 'male',
    display_photo: 'https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    connection_status: 'true',
  },
  {
    first_name: 'Mary',
    last_name: 'Okwong',
    age: 29,
    gender: 'female',
    display_photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg',
    connection_status: 'false',
  },
  {
    first_name: 'Kingsley',
    last_name: 'Boakye',
    age: 22,
    gender: 'male',
    display_photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    connection_status: 'true',
  },
  {
    first_name: 'Kelvin',
    last_name: 'Bariche',
    age: 25,
    gender: 'female',
    display_photo: 'https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    connection_status: 'false',
  },
  {
    first_name: 'Johnson',
    last_name: 'Ojo',
    age: 31,
    gender: 'male',
    display_photo: 'https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    connection_status: 'false',
  },
  {
    first_name: 'Yaw',
    last_name: 'Antwi-Owusu',
    age: 24,
    gender: 'male',
    display_photo: 'https://images.pexels.com/photos/2092450/pexels-photo-2092450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    connection_status: 'true',
  },
  {
    first_name: 'Agatha',
    last_name: 'Ambrose',
    age: 20,
    gender: 'male',
    display_photo: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    connection_status: 'false',
  },
]

function FindRoomie() {

  const [isLoading, setIsLoading] = useState(false);
  const [roomies, setRoomies] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const apiUrl = 'https://petcha.herokuapp.com/members/profile';
  //   axios.get(apiUrl).then((roomie) => {
  //     const allRoomies = roomie.data;
  //     setRoomies(allRoomies);
  //   });
  // }, [isLoading]);

  useEffect(() => {
    setRoomies(dummy_roomies);
  }, [])

  const heading2 = {
    fontWeight: '600',
    fontSize: '32px',
    color: '#0a0a0a'
  }

  // if (!isLoading || roomies.length === 0) {
    if (false) {
    return <Container className="min-vh-100 d-flex justify-content-center align-items-center">
              <Row className="">
                <Spinner animation="border" className=""/>
                <span className="visually-hidden">Data loading...</span>
              </Row>
            </Container>
  }

  return (
    <>
      {/* <Outlet /> */}
      <header
        className="masthead"
        style={{ background: "var(--bs-white)", marginBottom: "10px" }}
      >
        <div className='container'>
          <h2 style={heading2}>Roomies for you</h2>
          <div className="w-100 filter" style={{ marginTop: "0px" }}>
            <form className="d-flex flex-md-row flex-column w-100 justify-content-between">
              <div className='d-flex justify-content-start col-md-6 col-sm-12'>
                <input placeholder="Search By Location" size="13" style={{boxShadow: "0 0 2px #aaa"}} value="Madina, Accra" />
              </div>
              
              <div className='d-flex justify-content-between col-md-3 col-sm-12'>
                <select defaultValue="both">
                  <option value="both">Both genders</option>
                  <option value="male" >Male</option>
                  <option value="">Female</option>
                </select>
                <select defaultValue={'less-than-30'}>
                  <option value="less-than-30">Less than 30</option>
                </select>
              </div>

              <div className='d-flex justify-content-between col-md-3 col-sm-12'>
                <select defaultValue="masters">
                  <option value="">Education</option>
                  <option value="">High School</option>
                  <option value="">Bachelors</option>
                  <option value="masters">Masters</option>
                  <option value="">PhD</option>
                </select>
                <select defaultValue="employee">
                  <option value="">Occupation</option>
                  <option value="">Student</option>
                  <option value="employee">Employee</option>
                  <option value="">Self-Employed</option>
                  <option value="">Other</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        

        <div className="container" style={{marginTop: "19px",}}>
          <div className="row">
            {roomies.map((roomie, i) => (
              <RoomieCard key={i} roomie={roomie} />
            ))}
          </div>

          <div className='row'>
            <div className='d-flex justify-content-center col-12 mt-4'>
              <button className='btn btn-primary btn-lg text-center' style={{marginTop: '24px', backgroundColor: '#0a0a0a', textTransform: 'uppercase'}}>Load more</button>
            </div>
          </div>

        </div>

      </header>
    </>
  );
}

export default FindRoomie