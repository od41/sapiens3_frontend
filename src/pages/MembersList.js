import React from 'react'
import { Outlet } from 'react-router-dom'

function MembersList() {
  return (
    <>
      {/* <Outlet /> */}
      <section className="clean-block clean-info dark" style={{background: "var(--bs-white)"}}>
            <div className="container" style={{margintop: "45px"}}>
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <h3><strong>Roomies for you.</strong></h3>
                        <div className="getting-started-info">
                            <form id="search_form">
                              <div>
                                <label for="location">Search by location</label>
                                <input name="location" id='location' type='text' />
                              </div>

                              <div>
                                <label for="gender">Gender</label>
                                <select name="gender" id="gender">
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </select>
                              </div>

                              <div>
                                <label for="age">Age</label>
                                <select name="age" id="age">
                                  <option value="18-24">18 to 24 years old</option>
                                  <option value="25-30">25 to 30 years old</option>
                                  <option value="30-35">31 to 35 years old</option>
                                  <option value="35-40">35 to 40 years old</option>
                                  <option value="41+">Older than 41 years old</option>
                                </select>
                              </div>

                              <div>
                                <label for="education">Education</label>
                                <select name="education" id="education">
                                  <option value="secondary">Secondary</option>
                                  <option value="university">University</option>
                                  <option value="masters">Masters</option>
                                  <option value="phd">PhD</option>
                                </select>
                              </div>

                              <div>
                                <label for="occupation">Occupation</label>
                                <select name="occupation" id="occupation">
                                  <option value="teacher">Teacher</option>
                                  <option value="developer">Developer</option>
                                  <option value="designer">Designer</option>
                                  <option value="freelancer">Freelancer</option>
                                </select>
                              </div>
                          
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MembersList