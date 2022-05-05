import React from 'react'

import { Link, Outlet } from 'react-router-dom';
import homeRoomate from "assets/img/scenery/home-roomate.png";
import avatar1 from "assets/img/avatars/avatar1.jpg"
import avatar2 from "assets/img/avatars/avatar2.jpg"
import avatar3 from "assets/img/avatars/avatar3.jpg"

function LandingPage() {
  return (
    <>
      <Outlet />
      <section className="clean-block clean-info dark" style={{background: "var(--bs-white)"}}>
            <div className="container" style={{margintop: "45px"}}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3><strong>Co-live with people.</strong><br /><strong>with Shared valuess.</strong></h3>
                        <div className="getting-started-info">
                            <p>We're building a community of people who want to live sustainably, and we're making it easy for everyone to afford it.</p>
                        </div>
                        <div className="getting-started-info"><Link to="/register" className="btn btn-outline-primary btn-lg" type="button" style={{background: "var(--bs-gray-dark)", color: "var(--bs-white)", borderRadius: "15px", textAlign: "center"}}>Find a roomie</Link>
                            <p></p>
                        </div>
                    </div>
                    <div className="col-md-6"><img alt="roomies rooming" className="img-thumbnail" data-aos="fade-up" data-aos-duration="100" src={homeRoomate} /></div>
                </div>
            </div>
        </section>
        <section className="clean-block features">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Why Choose Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 feature-box"><i className="icon-star icon"></i>
                        <h4>People First</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-pencil icon"></i>
                        <h4>Free Signup</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-screen-smartphone icon"></i>
                        <h4>No Commitment</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-refresh icon"></i>
                        <h4>Safe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="clean-block about-us" style={{background: "#f6f6f6"}}>
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info" style={{fontWeight: "bold"}}>Find Your Roomate.</h2>
                    <p>Connecting you first. With people who share your values, dreams,goals and perspectives.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card"><img alt="roomies avatar" className="card-img-top w-100 d-block" src={avatar1} />
                            <div className="card-body info">
                                <h4 className="card-title">Elias Slim</h4>
                                <p className="card-text">Outgoing,Free Spirited</p>
                                <div className="icons"><Link to="/"><i className="icon-social-facebook"></i></Link><Link to="/"><i className="icon-social-instagram"></i></Link><Link to="/"><i className="icon-social-twitter"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card"><img alt="roomies avatar" className="card-img-top w-100 d-block" src={avatar2} />
                            <div className="card-body info">
                                <h4 className="card-title">Robert Downturn</h4>
                                <p className="card-text">Party freak, Skilled UI Developer</p>
                                <div className="icons"><Link to="/"><i className="icon-social-facebook"></i></Link><Link to="/"><i className="icon-social-instagram"></i></Link><Link to="/"><i className="icon-social-twitter"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card"><img alt="roomies avatar" className="card-img-top w-100 d-block" src={avatar3} />
                            <div className="card-body info">
                                <h4 className="card-title">Daniella Darlington</h4>
                                <p className="card-text">Easy going, minimalist</p>
                                <div className="icons"><Link to="/"><i className="icon-social-facebook"></i></Link><Link to="/"><i className="icon-social-instagram"></i></Link><Link to="/"><i className="icon-social-twitter"></i></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default LandingPage