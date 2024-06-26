import React from 'react';
import logo from '../assets/HackStreetLogo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <img src={logo}  alt="Logo" style={styles.logo}/>
        <h1 style={styles.name}>Hackstreet</h1>
      </div>
      <div style={styles.buttonsContainer}>
        <ul style={styles.navbarMenu}>
            <li style={styles.list}><Link to="/" style={styles.tab}>Home</Link></li>
            <li style={styles.list}><Link to="/resources" style={styles.tab}>Resources</Link></li>
            <li style={styles.list}><Link to="/zipCode" style={styles.tab}>Find Home</Link></li>
            <li style={styles.list}><Link to="/profile" style={styles.tab}>Profile</Link></li>
            <li style={styles.list}><a href="mailto:mams@wpi.edu" style={styles.tab}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  list: {
    margin: '0.4rem',
    padding: '0.5rem',
    display: 'block'
  },
  tab: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.4vw'
  },
  navbarMenu: {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'space-between',
    marginRight: 20
  },
  container: {
    backgroundColor: '#1F6933',
    width: '100%',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontFamily: 'Familjen Grotesk, sans-serif',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
    marginBottom: '-0.2rem'
  },
  title: {
      height: '80px',
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      width: 80,
      height: 80,
      marginLeft: 35,
      marginRight: 10,
    },
    name: {
      fontSize: 35,
    },
    buttonsContainer: {
      marginRight: 10,
    },
    button: {
      marginLeft: 10,
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
};

export default Footer;