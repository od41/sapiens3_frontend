import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import 'assets/bootstrap/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'vanilla-zoom.min.css';
import "@fontsource/quicksand"

import Layout from 'components/layout/Layout';
import LandingPage from 'pages/LandingPage';
import Login from "pages/Login";
import Register from "pages/Register";
import MembersList from "pages/MembersList";
import MemberProfile from "pages/MemberProfile";


function App() {

  

  return (
    <div style={{ fontFamily: "Quicksand, sans-serif" }}>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="member" element={<MembersList />}>
            <Route index element={<MembersList />} />
            <Route path="profile" element={<MemberProfile />} />
          </Route>
        </Routes>

        
      </Layout>
    </div>
  );
}

export default App;
