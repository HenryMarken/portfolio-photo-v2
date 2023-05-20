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
        <p className="text-center font-playfair text-2xl md:text-3xl pb-3">Sydney VCD Grad Chair</p>
        <GalleryGrid
          Img1="/images/sydney/sydney-2.jpg"
          Img2="/images/sydney/sydney-4.jpg"
          Img3="/images/sydney/sydney-5.jpg"
          Img4=""
          Img5=""
        />
      </div>

      <div className="flex-grow bg-white pt-2">
        <p className="text-center font-playfair text-2xl md:text-4xl pb-3">Samir New Born Baby</p>
        <GalleryGrid
          Img1="/images/prince-baby/baby-blanket.jpg"
          Img2="/images/prince-baby/baby-books.jpg"
          Img3="/images/prince-baby/baby-parents.jpg"
          Img4="/images/prince-baby/harry-potter.jpg"
          Img5="/images/prince-baby/teddy-bear.jpg"
        />
      </div>
    </React.Fragment>
  );
};

export default portraitPage;
