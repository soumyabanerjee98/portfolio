import React from 'react';
import Styles from "./index.module.css";
import { config } from "../../../config/label";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={`${Styles?.moduleContainer}`}>
        <div className={` ${Styles?.leftContainer}`}>
            <Link 
            to="/" 
            className={`${Styles?.links}`}
            onClick={() => {window.scrollTo(0,0)}}>
                {config?.lbl_portfolio}
            </Link>
        </div>
        <div className={Styles?.rightContainer}>
            <div className={`${Styles?.abtMe}`}>
                <Link 
                to="/about" 
                className={`${Styles?.links}`}
                onClick={() => {window.scrollTo(0,0)}}>
                    {config?.lbl_about}
                </Link>
            </div>
            <div className={`${Styles?.contact}`}>
                <Link
                to="/contact" 
                className={`${Styles?.links}`}
                onClick={() => {window.scrollTo(0,0)}}>
                    {config?.lbl_contact}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header;