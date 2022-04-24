import React from 'react';
import Styles from "./index.module.css";
import Facebook from "../../../assets/svg/light/facebook.svg";
import Instagram from "../../../assets/svg/light/instagram.svg";
import Github from "../../../assets/svg/light/github.svg";
import { config } from "../../../config/label";

function Footer() {
  return (
    <div className={`${Styles?.moduleContainer}`}>
        <div className={`${Styles?.leftContainer}`}>
          <div className={`${Styles?.Icon}`}>
            <a href="https://www.facebook.com/soumya.banerjee.3367174" alt="facebook">
            <img src={Facebook} alt="facebook-icon"/>
            </a>
          </div>
          <div className={`${Styles?.Icon}`}>
            <a href="https://www.instagram.com/phoenix.19981g/" alt="instagram">
            <img src={Instagram} alt="instagram-icon"/>
            </a>
          </div>
          <div className={`${Styles?.Icon}`}>
            <a href="https://github.com/soumyabanerjee98" alt="github">
            <img src={Github} alt="github-icon"/>
            </a>
          </div>
        </div>
        <div className={`${Styles?.rightContainer}`}>
          {config?.lbl_copyright}
        </div>
    </div>
  )
}

export default Footer;