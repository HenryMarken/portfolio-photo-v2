//third party libraries
import React from "react";
import Image from 'next/image'

//components
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <React.Fragment> 
      <NavBar />

    {/* Masonry Layout */}
      <div className="lg:columns-4 md:columns-3 columns-1 gap-3 mx-auto space-y-3 pb-28 px-5 bg-white rounded">
        <Image src='/images/gallery/bus-bridge.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/sydney-book.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/hill.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/vancouver-bridge.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/walterdale-night.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/brett-mountain.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/stadium-night.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/edmonton-fall.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/maternity-ring.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/garage-justus.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/gtr-back.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/jaret-mountain.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/moody-train.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/underground-choi.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/supra-dark.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        <Image src='/images/gallery/wedding-waterfall.jpg' width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
       
       
      </div>
    </React.Fragment>
  );
}

export default HomePage;
