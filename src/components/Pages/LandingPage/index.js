import React from 'react';
import Styles from "./index.module.css";
// import { config } from "../../../config/label";
import Header from '../../Layout/Header';
import Footer from "../../Layout/Footer";

const LandingPage = () => {
  return (
    <>
    <Header/>
      <div className={`${Styles?.pageContainer}`}>

      </div>
    <Footer/>
    </>
  )
}

export default LandingPage