import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  //navbar toggle
  // let menu = document.querySelector(".menu-icon");
  // let navbar = document.querySelector(".navbar");
  window.onload = function(){
  document.querySelector(".menu-icon").onclick = () => {
    document.querySelector(".menu-icon").classList.toggle("bx-x");
    document.querySelector(".navbar").classList.toggle("open");
  };
  }
  return (
    <header>
      <div className="logo">
        <i className="fa-solid fa-moon"></i>
        <Link to="/" className="link">
          <span>BLOG SPOT</span>
        </Link>
      </div>
      <nav>
        <ul className="navbar">
          <li className="active">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>

          <li className="topListItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>

          {/* <li className="topListItem" onClick={handleLogout}>
          {user && "LOGOUT"}
        </li> */}
        </ul>
      </nav>

      <div className="main">
        {user ? (
          <div className="log-out">
            <Link to={"/settings"}>
              <img className="topImg" src={PF + user.profilePic} alt="" />
            </Link>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </div>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
        <div className="menu-icon fa-solid fa-bars"></div>
      </div>
    </header>

    // <div className="top">
    //   <div className="topLeft">
    //     <i className="topIcon fa-brands fa-square-facebook"></i>
    //     <i className="topIcon fa-brands fa-square-twitter"></i>
    //     <i className="topIcon fa-brands fa-square-pinterest"></i>
    //     <i className="topIcon fa-brands fa-square-instagram"></i>
    //   </div>
    //   <div className="topCenter">
    //     <ul className="topList">
    // <li className="topListItem">
    //       <Link to="/" className="link">
    //         HOME
    //       </Link>
    //     </li>
    //     <li className="topListItem">
    //       <Link to="/" className="link">
    //         ABOUT
    //       </Link>
    //     </li>
    //     <li className="topListItem">
    //       <Link to="/" className="link">
    //         CONTACT
    //       </Link>
    //     </li>
    //     <li className="topListItem">
    //       <Link to="/write" className="link">
    //         WRITE
    //       </Link>
    //     </li>
    //     <li className="topListItem" onClick={handleLogout}>
    //       {user && "LOGOUT"}
    //     </li>
    //     </ul>
    //   </div>
    //   <div className="topRight ">
    //   {user ? (
    //     <Link to={"/settings"}>
    //       <img className="topImg" src={PF + user.profilePic} alt="" />
    //     </Link>
    //   ) : (
    //     <ul className="topList">
    //       <li className="topListItem">
    //         <Link className="link" to="/login">
    //           LOGIN
    //         </Link>
    //       </li>
    //       <li className="topListItem">
    //         <Link className="link" to="/register">
    //           REGISTER
    //         </Link>
    //       </li>
    //     </ul>
    //   )}
    //   <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    // </div>
    // </div>
  );
}
