//third party libraries
import React from "react";

//components
import GalleryGrid from '../../components/GalleryGrid'
import NavBar from "../../components/NavBar";

const portraitPage = () => {
  return (
    <React.Fragment>
      <NavBar />

      <div className="text-black">
       
        <div className="flex-grow bg-white pt-2">
          <p className="text-center font-playfair text-2xl md:text-3xl pb-3">Kendra Graduation</p>
          <GalleryGrid
            Img1="/images/kendra-graduation/legislature-2.jpg"
            Img2="/images/kendra-graduation/legislature-3.jpg"
            Img3="/images/kendra-graduation/green-2.png"
            Img4="/images/kendra-graduation/legislature-4.jpg"
            Img5="/images/kendra-graduation/green-3.jpg"
          />
          <GalleryGrid
            Img1="/images/kendra-graduation/green-1.jpg"
            Img2="/images/kendra-graduation/legislature-1.jpg"
            Img3="/images/kendra-graduation/legislature-5.jpg"
            Img4="/images/kendra-graduation/green-4.png"
            Img5="/images/kendra-graduation/legislature-6.jpg"
          />
        </div>
        
        <div className="flex-grow bg-white pt-2">
          <p className="text-center font-playfair text-2xl md:text-3xl pb-3">Sydney VCD Grad Chair</p>
          <GalleryGrid
            Img1="/images/sydney/1-sydney.jpg"
            Img2="/images/sydney/2-sydney.jpg"
            Img3="/images/sydney/3-sydney.jpg"
            Img4="/images/sydney/4-sydney.jpg"
            Img5="/images/sydney/5-sydney.jpg"
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

        <div className="flex-grow bg-white pt-2">
          <p className="text-center font-playfair text-2xl md:text-4xl pb-3">Joël and Murielle Wedding</p>
          <GalleryGrid
            Img1="/images/wedding-joel/head-touching.jpg"
            Img2="/images/wedding-joel/black-white.jpg"
            Img3="/images/wedding-joel/fountain-background.jpg"
            Img4="/images/wedding-joel/kiss-top.jpg"
            Img5="/images/wedding-joel/looking-back.jpg"
          />
        </div>

      </div>
    </React.Fragment>
  );
};

export default portraitPage;
