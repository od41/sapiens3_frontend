import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import 'assets/bootstrap/css/bootstrap.min.css';
import 'assets/css/main.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "@fontsource/quicksand"

import Layout from 'components/layout/Layout';
import LandingPage from 'pages/LandingPage';
import Login from "pages/Login";
import Register from "pages/Register";
import QuickSetup from "pages/QuickSetup";
import FindRoomie from "pages/FindRoomie";
import MemberProfile from "pages/MemberProfile";


function App() {

  

  return (
    <div style={{ fontFamily: "Quicksand, sans-serif" }}>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="quick-setup" element={<QuickSetup />} />
          <Route path="register" element={<Register />} />
          <Route path="profile/:roomieId" element={<MemberProfile />} />
          <Route path="find-roomie" element={<FindRoomie />} />
        </Routes>

        
      </Layout>
    </div>
  );
}

export default App;
