import React from 'react'

import { Link, Outlet } from 'react-router-dom';

import quickSetup from 'assets/img/scenery/quick_setup.jpg'

function QuickSetup() {

  const heading2 = {
    fontWeight: '600',
    fontSize: '32px',
    color: '#0a0a0a'
  }

  return (
    <>
     <header className="masthead">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6" style={{borderRadius: "20"}}>
                    <h3 style={ {...heading2, marginTop: "123px"}} >Find A Roomie</h3>
                    <div className="getting-started-info">
                        <p>Fill this form and we will get you started right away.</p>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group mb-3"><label className="form-label">Date of Birth</label>
                                  <input className="form-control" type="text" style={{borderRadius: "20px"}} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-3"><label className="form-label">Display Image</label>
                                  <input className="form-control" type="text" style={{borderRadius: "16px"}} />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{textAlign: "left"}}>
                            <div className="col-sm-1 col-lg-11 col-xl-10" style={{width: "auto"}}>
                                <div className="form-group mb-3"><label className="form-label">Gender</label></div>
                                <div className="form-group mb-3" style={{textAlign: "center", width: "556px"}}>
                                    <div className="btn-group" role="group" style={{textAlign: "center", borderRadius: 0}}>
                                      <button className="btn btn-primary" type="button" style={{"color: var(--bs-gray-900);background: var(--bs-white);border-radius: 18px;margin-right: 22px;border-width: 3px;border-color: var(--bs-gray);padding-right: 36px;padding-left: 36px;width: 219.5px;": ""}}>Male</button>
                                      <button className="btn btn-primary" type="button" style={{"border-radius: 20px;color: var(--bs-gray-800);background: var(--bs-white);max-width: 218px;border-width: 3px;border-color: var(--bs-gray-700);width: 219.5px;": ""}}>FEMALE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-12">
                                <div className="form-group mb-3"><label className="form-label">Desired Location</label>
                                  <input className="form-control" type="text" style={{borderRadius: "20px"}} />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="getting-started-info"><button className="btn btn-outline-primary btn-lg" type="button" style={{"background: var(--bs-gray-dark);color: var(--bs-white);border-radius: 15px;text-align: center;padding-right: 25px;margin-top: 11px;":""}}>Find a roomie</button>
                        <p></p>
                    </div>
                </div>
                <div className="col-md-6">
                  <img className="img-thumbnail" alt="promo banner" data-aos="fade-up" data-aos-duration="100" src={quickSetup} />
                </div>
            </div>
        </div>
    </header>
    
    </>
  )
}

export default QuickSetup