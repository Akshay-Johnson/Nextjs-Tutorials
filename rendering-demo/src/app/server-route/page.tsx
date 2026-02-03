// import { serverSidefunction } from "../utils/server-utils";
import { clientSideFunction } from "../utils/client-utils";

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick";
import { ImageSlider } from "../../components/imageSlider";
import { serverSidefunction } from "../utils/server-utils";

export default function ServerRoutePage() {
//   const settings = {
//         dots: true,
//     };
        const result = serverSidefunction();
        const clientresult = clientSideFunction();
        console.log("Result from server side function:", result);
        return(
            <>
            <h1>Server Route Page {result} {clientresult}</h1>
            <ImageSlider />
            </>
        );
}