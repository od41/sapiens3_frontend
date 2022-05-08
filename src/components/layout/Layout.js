import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <>
      <Navbar />
      <main className="page landing-page" style={{background: "var(--bs-white)",}}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout