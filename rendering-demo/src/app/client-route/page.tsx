"use client"
// import { serverSidefunction } from "../utils/server-utils"
import {clientSideFunction} from "../utils/client-utils"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTheme } from '../../components/theme-provider';

export default function ClientRoutePage() {
    const theme = useTheme();
    const result = clientSideFunction();
    const settings = {
        dots: true,
    };
    return (
      <>
      <h1 style={{ color: theme.primary }}>Client Route Page</h1>
      <p>{result}</p>
      </>
    );   
}