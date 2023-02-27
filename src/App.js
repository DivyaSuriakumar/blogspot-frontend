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

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="https://blogspot-api.onrender.com/" exact element={<Home />} />
        <Route path="https://blogspot-api.onrender.com/register" element={user ? <Home /> : <Register />} />
        <Route path="https://blogspot-api.onrender.com/login" element={user ? <Home /> : <Login />} />
        <Route path="https://blogspot-api.onrender.com/write" element={user ? <Write /> : <Register />} />
        <Route path="https://blogspot-api.onrender.com/settings" element={user ? <Settings /> : <Register />} />
        <Route path="https://blogspot-api.onrender.com/post/:postId" element={<Single />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;