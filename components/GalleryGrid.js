//third party libraries
import React from "react";
import Image from 'next/image'


const GalleryGrid = (props) => {

    const {Img1, Img2, Img3, Img4, Img5} = props;

    return (
        
        <div className="lg:columns-3 columns-1 gap-3 mx-auto space-y-3 pb-28 px-5 bg-white rounded ">
            <Image src={Img1} width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
            <Image src={Img2} width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
            <Image src={Img3} width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
            <Image src={Img4} width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
            <Image src={Img5} width={3200} height={1800} className="break-inside-avoid rounded-sm" alt="image"></Image>
        </div>
    );
};

export default GalleryGrid