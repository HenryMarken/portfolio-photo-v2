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
        <p className="text-center font-playfair text-2xl md:text-3xl pb-3">Edmonton</p>
        <GalleryGrid
          Img1="/images/edmonton/bus-sunset.jpg"
          Img2="/images/edmonton/moody-train.jpg"
          Img3="/images/edmonton/first-nation.jpg"
          Img4="/images/edmonton/flying-canoe.jpg"
          Img5="/images/edmonton/lrt-city.jpg"
        />
      </div>
    </React.Fragment>
  );
};

export default portraitPage;