import React from 'react'

import { Link, Outlet } from 'react-router-dom';

import quickSetup from 'assets/img/scenery/quick_setup.jpg'

function Register() {
  return (
    <>
      <section className="clean-block clean-info dark" style={{background: "var(--bs-white)"}}>
            <div className="container" style={{margintop: "45px"}}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3><strong>Find a roomie.</strong><br /><strong>with Shared values.</strong></h3>
                        <div className="getting-started-info">
                            <form>
                              <div>
                                <label for="first_name">First Name</label>
                                <input name="first_name" id='first_name' type='text' />
                              </div>

                              <div>
                                <label for="last_name">Last Name</label>
                                <input name="last_name" id='last_name' type='text' />
                              </div>

                              <div>
                                <label for="date_of_birth">Date of birth</label>
                                <input name="date_of_birth" id='date_of_birth' type='date' />
                              </div>

                              <div>
                                <label for="gender">Gender</label>
                                <span>
                                  <input name="gender" id='male' value="male" type='radio' />
                                  <label for="male">Male</label>
                                </span>
                                <span>
                                  <input name="gender" id='female' value="female" type='radio' />
                                  <label for="female">Female</label>
                                </span>
                              </div>

                              <div>
                                <label for="desired_location">Desired location</label>
                                <input name="desired_location" id='desired_location' type='text' />
                              </div>
                              <button className="btn btn-outline-primary btn-lg" type="button" style={{background: "var(--bs-gray-dark)", color: "var(--bs-white)", borderRadius: "15px", textAlign: "center"}}>Find a roomie</button>

                            </form>
                        </div>
                        <div className="getting-started-info">
                            <img alt="quick setup" src={quickSetup} />
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Register