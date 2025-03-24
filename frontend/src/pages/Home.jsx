import React from "react";

import Header from "../components/Header";

/**
 * Home page component.
 *
 * TODO: build a home page that displays a welcome message and a brief description of the app.
 * Should have links to other pages (Sidenav? Maybe?).
 * Feel free to add other functionality as you see fit.
 * @returns {JSX.Element} Home page
 */
const Home = () => {
  return (
    <>
      <div>
        <Header className="header" />
      </div>
      <div className="wrapper">
        <h1>Welcome to the bus stop app</h1>
        <div className="image-container">
          <img className="image" src="BusTracking.jpg" alt="Home page photo" />
        </div>
        <p>
          This app allows you to view bus stops and add them to your favourites.
        </p>
      </div>
    </>
  );
};

export default Home;
