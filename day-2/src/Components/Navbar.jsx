import { Link, NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/espanol",
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
  color: "black",
  textDecoration: "none"
};

const activeStyle = {
  color: "red",
  textDecoration: "none"
};

function Navbar() {
  return (
    <div>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        {links.map((item) => (
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to={item.to}
            key={item.to}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
