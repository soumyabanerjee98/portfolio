import React from "react";
import styles from "./index.module.css";
import { elementIdConfig, webConfig } from "@/config";
import Image from "next/image";
import ProfilePhoto from "../../public/profile-photo.jpeg";
import { TypeAnimation } from "react-type-animation";

const About = (props: PageProps) => {
  const { id } = props;
  const nav: {
    label: string;
    ref: string;
  }[] = [
    { label: "Skills", ref: elementIdConfig?.skills },
    { label: "Projects", ref: elementIdConfig?.projects },
  ];
  const typeAnimationSet = () => {
    let arr: any[] = [];
    webConfig?.type_animation_set?.map((i: string) => {
      arr.push(i);
      arr.push(webConfig?.type_animation_interval);
    });
    return arr;
  };
  const navigate = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView();
  };
  return (
    <div id={id} className={styles?.main}>
      <div className={styles?.header}>
        <div className={styles?.header_left_column}>
          {nav?.map((i) => (
            <div
              key={`nav-${i?.ref}`}
              className={styles?.nav_links}
              onClick={() => {
                navigate(i?.ref);
              }}
            >
              {i?.label}
            </div>
          ))}
        </div>
        <div
          className={styles?.header_right_column}
          onClick={() => {
            navigate(elementIdConfig?.contact);
          }}
        >
          Contact
        </div>
      </div>
      <div className={styles?.details}>
        <Image
          src={ProfilePhoto}
          alt="Profile photo"
          className={styles?.profile_photo}
          priority
        />
        <div className={styles?.introduction}>
          <>Hi!</>
          <br />
          <>
            Myself <span className={styles?.name}>{webConfig?.first_name}</span>
          </>
          <br />
          <>and I am</>
          <div className={styles?.type_animation}>
            <TypeAnimation
              sequence={typeAnimationSet()}
              cursor={true}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className={styles?.bio_section}>
        <div className={styles?.who}>About me</div>
        <div className={styles?.bio}>{webConfig?.details}</div>
      </div>
    </div>
  );
};

export default About;
