//third party libraries
import React from "react";

//components
import NavBar from "../components/NavBar";
import "../app/globals.css"; //need this to include the css for tailwindcss

function HomePage() {
  return (
    <React.Fragment>
      <NavBar />

      <div className="py-32 text-center">
        <h2 className="font-extrabold text-4xl">Navbars in Tailwind</h2>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
