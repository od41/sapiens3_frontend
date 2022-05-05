import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <>
      <Navbar />
      <main className="page landing-page" style={{background: "var(--bs-white)", marginTop: '90px   '}}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout