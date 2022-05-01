import React  from 'react'; //{ useState }
import Styles from "./index.module.css";
import { config } from "../../../config/label";
import Header from '../../Layout/Header';
import Footer from "../../Layout/Footer";
import Profile from "../../../assets/png/profile-image-round.png";
import TypeAnimation from 'react-type-animation';

const LandingPage = () => {

  // const [projects, setProjects] = useState([{
  //   prj_name: "",
  //   prj_url: "",
  //   prj_desc: ""
  // }]);

  return (
    <>
    <Header/>
      <div className={`${Styles?.pageContainer}`}>
        <div className={`${Styles?.headContainer}`}>
          <div className={`${Styles?.headContainer_left}`}>
            <div className={`${Styles?.fullName}`}>
              <TypeAnimation
                cursor={false}
                sequence={[`${config?.lbl_fname} ${config?.lbl_lname}`, 1000]}
                repeat={Infinity}
                className={`${Styles?.type}`}
              />
            </div>
            <div className={`${Styles?.skills}`}>
              <TypeAnimation
                  cursor={false}
                  sequence={[
                    `${config?.lbl_skill_1}`, 4000,
                    `${config?.lbl_skill_2}`, 4000,
                    `${config?.lbl_skill_3}`, 4000,
                    `${config?.lbl_skill_4}`, 4000,
                    `${config?.lbl_skill_5}`, 4000,
                    `${config?.lbl_skill_6}`, 4000,
                  ]}
                  repeat={Infinity}
                  className={`${Styles?.type}`}
                />
            </div>
          </div>
          <div className={`${Styles?.headContainer_right}`}>
            <img src={Profile} alt="profile" style={{height: 400, width: 400}}/>
          </div>
        </div>
        <div className={`${Styles?.bodyContainer}`}>
          <div className={`${Styles?.bodyContainer_projects}`}>
            {projects.map((items) => {
              return(
                <div className={`${Styles?.projects_card}`}>
                  
                </div>
              )
            })}
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default LandingPage;