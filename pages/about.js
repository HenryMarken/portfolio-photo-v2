//third party libraries
import React from "react";
import Image from "next/image";


//local import
import NavBar from "../components/NavBar";

const aboutPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="flex flex-col min-h-screen md:flex font-playfair text-2xl text-black  md:text-3xl lg:text-4xl px-10 bg-white text-center p-10 flex justify-center items-center">
        <Image src='/images/about-page.jpg' width={3200} height={1800} className="rounded-sm 2xl:w-1/2 sm:w-screen p-10 " ></Image>
        <p className="xl:max-w-6xl lg:max-w-2xl max-w-lg  pt-10 font-gilroy">
          I am a recent electrical engineering graduate that does photography as
          a side hobby. I started with photography as it helped me to see the
          world in a different view. For me it was a way to live in the moment.
          I find myself always stressing and trying to rush my life into what I
          think is the best life for me not realizing to find happiness in the
          process and not the goal. </p>
          <p className="xl:max-w-6xl lg:max-w-2xl max-w-lg py-10 flex-grow font-gilroy"> With photography it allows me to take a step
          back and do just so. Whenever the opportunity is presented to improve
          my skills in photography I do not shy away. I hope to do as many
          photoshoots as I can while meeting wonderful people along the way. One
          day I want to start my own photography business and hopefully strive
          as a full time photographer.
        </p>
      </div>
    </React.Fragment>
  );
};

export default aboutPage;
