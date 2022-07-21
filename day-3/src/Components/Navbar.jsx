import { NavLink } from "react-router-dom";

const links = [
  // {
  //   to: "/",
  //   title: "Home"
  // },
  {
    to: "/",
    title: "Espanol"
  },
  {
    to: "/property",
    title: "List Your Property"
  },
  {
    to: "/support",
    title: "Support"
  },
  {
    to: "/trips",
    title: "Trips"
  },

  {
    to: "/login",
    title: "Sign In"
  }
];

// NavLinks
const baseStyle = {
  color: "white",
  textDecoration: "none"
};

const activeStyle = {
  color: "white",
  textDecoration: "none"
};

function Navbar() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "110px",
          justifyContent: "center",
          border: "1px solid",
          height: "40px",
          paddingTop: "20px",
          backgroundColor: "#00253C",
          borderRadius: "10px"
        }}
      >
        <img
          style={{ width: "10%", paddingBottom: "20px" }}
          src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"
          alt=""
        />
        <div>
          <select name="" id="">
            <option value="">More travel</option>
            <option value="Stays">Stays</option>
            <option value="flights">Flights</option>
            <option value="Packages">Packages</option>
            <option value="Cars">Cars</option>
            <option value="Cruises">Cruises</option>
            <option value="Things">Things to do</option>
            <option value="Deals">Deals</option>
            <option value="Groups">Groups & meetings</option>
            <option value="Travel">Travel Blog</option>
          </select>
        </div>
        {links.map((item) => (
          // activeStyle, or activeClass
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to={item.to}
            key={item.to}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <div style={{}}>
        <input
          style={{
            marginTop: "5px",
            height: "30px",
            width: "40%"
          }}
          type="text"
          placeholder="Search Here......"
        />
        <h5
          style={{ cursor: "pointer", marginTop: "2px", marginBottom: "0px" }}
        >
          SEARCH
        </h5>
      </div>
    </div>
  );
}

export default Navbar;
