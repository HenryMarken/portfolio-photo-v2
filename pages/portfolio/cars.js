//third party libraries
import React from "react";

//components
import GalleryGrid from '../../components/GalleryGrid'
import NavBar from "../../components/NavBar";

const portraitPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="text-black font-gilroy">

      <div className="flex-grow bg-white pt-2">
          <p className="text-center text-2xl md:text-4xl pb-3">Driven Edmonton 2023</p>
          <GalleryGrid
            Img1="/images/driven/gt3rs-sexy.jpg"
            Img2="/images/driven/datsun-yellow.jpg"
            Img3="/images/driven/lotus-above.jpg"
            Img4="/images/driven/porsche-people.jpg"
            Img5="/images/driven/supra-wheel.jpg"
          />
          <GalleryGrid
            Img1="/images/driven/nsx-through.jpg"
            Img2="/images/driven/gtr-blue.jpg"
            Img3="/images/driven/supra-red.jpg"
            Img4="/images/driven/ferrari.jpg"
            Img5="/images/driven/brian-gtr.jpg"
          />
      </div>

      <div className="flex-grow bg-white pt-2">
          <p className="text-center text-2xl md:text-4xl pb-3">Midnight Revup 2023</p>  
          <GalleryGrid
            Img1="/images/midnight-revup/mclaren-sexy.jpg"
            Img2="/images/midnight-revup/ferrari-wheel.jpg"
            Img3="/images/midnight-revup/evo-10.jpg"
            Img4="/images/midnight-revup/cars-line.jpg"
            Img5="/images/midnight-revup/fx-d.jpg"
          />
          <GalleryGrid
            Img1="/images/midnight-revup/grey-evo.jpg"
            Img2="/images/midnight-revup/mclaren-wheel.jpg"
            Img3="/images/midnight-revup/ferrari-seat.jpg"
            Img4="/images/midnight-revup/nissan.jpg"
            Img5="/images/midnight-revup/wrx.jpg"
          />
        </div>

      
        <div className="flex-grow bg-white pt-2">
          <p className="text-center text-2xl md:text-3xl pb-3">Edmonton 2023 Season Opener</p>
          <GalleryGrid
            Img1="/images/yeg-season-opener/initial-d.jpg"
            Img2="/images/yeg-season-opener/dark-supra.jpg"
            Img3="/images/yeg-season-opener/double-gtr.jpg"
            Img4="/images/yeg-season-opener/sunset-prelude.jpg"
            Img5="/images/yeg-season-opener/single-gtr.jpg"
          />
        </div>

        <div className="flex-grow bg-white pt-2">
          <p className="text-center text-2xl md:text-4xl pb-3">Justus and Sam BMW</p>
          <GalleryGrid
            Img1="/images/justus-choi/bmw-sunset.jpg"
            Img2="/images/justus-choi/bmw-underground.jpg"
            Img3="/images/justus-choi/bmw-roller.jpg"
            Img4="/images/justus-choi/bmw-bridge.jpg"
            Img5="/images/justus-choi/bmw-city.jpg"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default portraitPage;
