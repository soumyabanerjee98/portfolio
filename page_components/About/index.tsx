import React from "react";
import styles from "./index.module.css";
import { colorConfig, elementIdConfig, webConfig } from "@/config";
import Image from "next/image";
import ProfilePhoto from "../../public/profile-photo.jpeg";
import { TypeAnimation } from "react-type-animation";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

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
        <Canvas className={styles?.distort}>
          {/* <OrbitControls enableZoom={false} /> */}
          <ambientLight intensity={2} />
          <directionalLight position={[3, 2, 1]} />
          {/* @ts-ignore */}
          <Sphere args={[1, 100, 200]} scale={1.7}>
            <MeshDistortMaterial
              color={colorConfig?.primary_hover}
              attach="material"
              distort={0.5}
              speed={0.2}
            />
            {/* @ts-ignore */}
            <Sphere
              args={[1, 100, 200]}
              scale={0.2}
              position={[-0.6, 0.8, 0.8]}
            >
              <MeshDistortMaterial
                color={colorConfig?.primary}
                attach="material"
                distort={0.5}
                speed={0.9}
              />
            </Sphere>
            {/* @ts-ignore */}
            <Sphere args={[1, 100, 200]} scale={0.2} position={[1, -0.2, 0.8]}>
              <MeshDistortMaterial
                color={colorConfig?.primary}
                attach="material"
                distort={0.5}
                speed={0.9}
              />
            </Sphere>
            {/* @ts-ignore */}
            <Sphere
              args={[1, 100, 200]}
              scale={0.2}
              position={[-0.6, -1.6, -0.8]}
            >
              <MeshDistortMaterial
                color={colorConfig?.primary}
                attach="material"
                distort={0.5}
                speed={0.9}
              />
            </Sphere>
            {/* @ts-ignore */}
          </Sphere>
        </Canvas>
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
