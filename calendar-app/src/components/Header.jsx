import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>📅 Calendar App</h1>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navListItem}><Link to="/" style={styles.navItem}>Home</Link></li>
          <li style={styles.navListItem}><Link to="/calendar" style={styles.navItem}>Calendar</Link></li>
          <li style={styles.navListItem}><Link to="/profile" style={styles.navItem}>Profile</Link></li>
          <li style={styles.navListItem}><Link to="/login" style={styles.loginBtn}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between", // Keeps logo and nav separated
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    maxWidth: "100%", // Ensures it doesn't exceed screen width
    boxSizing: "border-box", // Includes padding in width calculation
  },
  logo: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  },
  nav: {
    display: "flex",
    justifyContent: "flex-end", // Aligns nav items to the right
  },
  navList: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
    alignItems: "center",
    gap: "20px", // Increased space between items
  },
  navListItem: {
    display: "flex",
    alignItems: "center",
  },
  navItem: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "background 0.3s ease",
    whiteSpace: "nowrap",
  },
  loginBtn: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "8px 16px",
    borderRadius: "5px",
    backgroundColor: "#007bff", // Distinct color for login button
    transition: "background 0.3s ease",
    whiteSpace: "nowrap",
  },
};

export default Header;
