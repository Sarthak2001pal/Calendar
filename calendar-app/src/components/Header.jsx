import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>📅 Calendar App</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navItem}>Home</Link></li>
          <li><Link to="/calendar" style={styles.navItem}>Calendar</Link></li>
          <li><Link to="/profile" style={styles.navItem}>Profile</Link></li>
          <li><Link to="/login" style={styles.navItem}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "20px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  },
  navItem: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Header;
