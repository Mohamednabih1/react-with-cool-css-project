import React from 'react';
import soccerBallImage from './soccer-ball.png';
import playerAnimation from './player-animation.gif';

const Homepage = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      margin: 0,
      padding: 0,
    },
    app: {
      textAlign: 'center',
      padding: '40px',
    },
    appHeader: {
      backgroundColor: '#282c34',
      padding: '20px',
      borderRadius: '10px',
      color: 'white',
    },
    appTitle: {
      fontSize: '32px',
      marginBottom: '10px',
    },
    appParagraph: {
      fontSize: '18px',
    },
    appLink: {
      color: '#61dafb',
      textDecoration: 'none',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    mstfa5oia: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#61dafb',
      fontWeight: 'bold',
    },
    soccerBallImage: {
      width: '200px',
      marginBottom: '20px',
    },
    playerAnimation: {
      width: '300px',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.appHeader}>
        <h1 style={styles.appTitle}>Welcome to My Awesome FIFA Game Homepage</h1>
        <div style={styles.mstfa5oia}>
          MO SALAH!
        </div>
        <img src={soccerBallImage} alt="Soccer Ball" style={styles.soccerBallImage} />
        <p style={styles.appParagraph}>
          Get ready to experience the excitement of FIFA on a whole new level!
        </p>
        <img src={playerAnimation} alt="Player Animation" style={styles.playerAnimation} />
        <p style={styles.appParagraph}>
          Join the action, compete with friends, and become the ultimate FIFA champion.
        </p>
        <a href="#" style={styles.appLink}>
          Learn More about the Game
        </a>
      </header>
    </div>
  );
};

export default Homepage;
