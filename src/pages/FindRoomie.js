import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Container, Row, Spinner } from 'react-bootstrap';

import RoomieCard from 'components/Cards/RoomieCard'

const heading2 = {
  fontWeight: '600',
  fontSize: '32px',
  color: '#0a0a0a'
}

function FindRoomie() {

  const [isLoading, setIsLoading] = useState(false);
  const [roomies, setRoomies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const apiUrl = 'https://petcha.herokuapp.com/members/profile';
    axios.get(apiUrl).then((roomie) => {
      const allRoomies = roomie.data;
      setRoomies(allRoomies);
    });
  }, [isLoading]);

  if (!isLoading || roomies.length === 0) {
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
                <input placeholder="Search By Location" size="13" style={{boxShadow: "0 0 2px #aaa"}}></input>
              </div>
              
              <div className='d-flex justify-content-between col-md-3 col-sm-12'>
                <select>
                  <option value="">Gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
                <select>
                  <option value="">Age</option>
                </select>
              </div>

              <div className='d-flex justify-content-between col-md-3 col-sm-12'>
                <select>
                  <option value="">Education</option>
                  <option value="">High School</option>
                  <option value="">Bachelors</option>
                  <option value="">Masters</option>
                  <option value="">PhD</option>
                </select>
                <select>
                  <option value="">Occupation</option>
                  <option value="">Student</option>
                  <option value="">Employee</option>
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