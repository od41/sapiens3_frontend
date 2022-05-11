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
import CreateAccount from "pages/CreateAccount";
import QuickSetup from "pages/QuickSetup";
import FindRoomie from "pages/FindRoomie";
import MemberProfile from "pages/MemberProfilePage";
import MyProfilePage from "pages/MyProfilePage";


function App() {

  return (
    <div style={{ fontFamily: "Quicksand, sans-serif" }}>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="quick-setup" element={<QuickSetup />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="my-profile" element={<MyProfilePage />} />
          <Route path="profile/:roomieId" element={<MemberProfile />} />
          <Route path="find-roomie" element={<FindRoomie />} />
        </Routes>

        
      </Layout>
    </div>
  );
}

export default App;
