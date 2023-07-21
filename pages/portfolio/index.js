//third party libraries
import React from "react";
import Image from "next/image";
import Link from 'next/link';

//components
import NavBar from "../../components/NavBar";

const portfolioPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="text-black font-gilroy">
      <div className="flex flex-col md:flex text-2xl  md:text-3xl lg:text-4xl px-10 bg-white text-center p-10 flex justify-center items-center">
        <p className="xl:max-w-6xl lg:max-w-2xl max-w-lg pb-2">
          Automotive </p>
          <Link href='/portfolio/cars' className="items-center justify-center flex">
            <Image src='/images/driven/gt3rs-sexy.jpg' width={3200} height={1800} className="rounded-sm 2xl:w-1/2 sm:w-screen p-10 " ></Image>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex text-2xl md:text-3xl lg:text-4xl px-10 bg-white text-center p-10 flex justify-center items-center">
        <p className="xl:max-w-6xl lg:max-w-2xl max-w-lg pb-2">
          Portraits </p>
          <Link href='/portfolio/portraits' className="items-center justify-center flex"><Image src='/images/portrait.jpg' width={3200} height={1800} className="rounded-sm 2xl:w-1/2 sm:w-screen p-10 " ></Image>
          </Link>
        </div>

        <div className="flex flex-col md:flex text-2xl  md:text-3xl lg:text-4xl px-10 bg-white text-center p-10 flex justify-center items-center">
        <p className="xl:max-w-6xl lg:max-w-2xl max-w-lg pb-2">
          Street </p>
          <Link href='/portfolio/street' className="items-center justify-center flex">
            <Image src='/images/street.jpg' width={3200} height={1800} className="rounded-sm 2xl:w-1/2 sm:w-screen p-10 " ></Image>
          </Link>
        </div>

      </div>
    </React.Fragment>
  );
};

export default portfolioPage;
