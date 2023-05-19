//third party libraries
import React from "react";
import Image from 'next/image'

//components
import NavBar from "../components/NavBar";
import GalleryGrid from "../components/GalleryGrid";
import "../app/globals.css"; //need this to include the css for tailwindcss

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />

    {/* Masonry Layout */}
      <div className="lg:columns-4 md:columns-3 columns-1 gap-3 mx-auto space-y-3 pb-28 px-5 bg-white rounded">
        <Image src='/images/bus-bridge.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/hill.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/vancouver-bridge.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/walterdale-night.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/garage-justus.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gtr-back.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/moody-train.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/underground-choi.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/supra-dark.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
       
      </div>
    </React.Fragment>
  );
}

export default HomePage;
