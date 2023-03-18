import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("https://blogspot-api.onrender.com/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          aut enim, accusamus possimus iste hic aperiam{" "}
        </p>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitlec">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link" >
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul> 
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
