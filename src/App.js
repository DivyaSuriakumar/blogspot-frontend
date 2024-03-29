import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from "./context/Context";
import Favicon from "react-favicon";

function App() {
  const { user } = useContext(Context);
  return (
    <div>
    <Favicon url="https://raw.githubusercontent.com/DivyaSuriakumar/blogspot-frontend/main/public/favicon.ico"></Favicon>
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;