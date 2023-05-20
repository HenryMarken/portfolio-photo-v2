//third party libraries
import React from "react";

//components
import GalleryGrid from '../../components/GalleryGrid'
import NavBar from "../../components/NavBar";

const portraitPage = () => {
  return (
    <React.Fragment>
      <NavBar />

      <div className="flex-grow bg-white pt-2">
        <p className="text-center font-playfair text-2xl md:text-3xl pb-3">Edmonton 2023 Season Opener</p>
        <GalleryGrid
          Img1="/images/yeg-season-opener/initial-d.jpg"
          Img2="/images/yeg-season-opener/dark-supra.jpg"
          Img3="/images/yeg-season-opener/double-gtr.jpg"
          Img4="/images/yeg-season-opener/sunset-prelude.jpg"
          Img5="/images/yeg-season-opener/single-gtr.jpg"
        />
      </div>

      <div className="flex-grow bg-white pt-2">
        <p className="text-center font-playfair text-2xl md:text-4xl pb-3">Justus and Sam BMW</p>
        <GalleryGrid
          Img1="/images/justus-choi/bmw-sunset.jpg"
          Img2="/images/justus-choi/bmw-underground.jpg"
          Img3="/images/justus-choi/bmw-roller.jpg"
          Img4="/images/justus-choi/bmw-bridge.jpg"
          Img5="/images/justus-choi/bmw-city.jpg"
        />
      </div>
    </React.Fragment>
  );
};

export default portraitPage;
