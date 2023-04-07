import React from "react";
import styles from "./index.module.css";
import { elementIdConfig } from "@/config";
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
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere
            args={[1, 100, 200]}
            scale={1.7}
            key={undefined}
            id={undefined}
            name={undefined}
            material={undefined}
            quaternion={undefined}
            onClick={undefined}
            onPointerMissed={undefined}
            onContextMenu={undefined}
            onDoubleClick={undefined}
            onPointerDown={undefined}
            onPointerMove={undefined}
            onPointerUp={undefined}
            onPointerCancel={undefined}
            onPointerEnter={undefined}
            onPointerLeave={undefined}
            onPointerOver={undefined}
            onPointerOut={undefined}
            onWheel={undefined}
            attach={undefined}
            onUpdate={undefined}
            position={undefined}
            up={undefined}
            rotation={undefined}
            matrix={undefined}
            layers={undefined}
            dispose={undefined}
            visible={undefined}
            type={undefined}
            uuid={undefined}
            parent={undefined}
            modelViewMatrix={undefined}
            normalMatrix={undefined}
            matrixWorld={undefined}
            matrixAutoUpdate={undefined}
            matrixWorldAutoUpdate={undefined}
            matrixWorldNeedsUpdate={undefined}
            castShadow={undefined}
            receiveShadow={undefined}
            frustumCulled={undefined}
            renderOrder={undefined}
            animations={undefined}
            userData={undefined}
            customDepthMaterial={undefined}
            customDistanceMaterial={undefined}
            isObject3D={undefined}
            onBeforeRender={undefined}
            onAfterRender={undefined}
            applyMatrix4={undefined}
            applyQuaternion={undefined}
            setRotationFromAxisAngle={undefined}
            setRotationFromEuler={undefined}
            setRotationFromMatrix={undefined}
            setRotationFromQuaternion={undefined}
            rotateOnAxis={undefined}
            rotateOnWorldAxis={undefined}
            rotateX={undefined}
            rotateY={undefined}
            rotateZ={undefined}
            translateOnAxis={undefined}
            translateX={undefined}
            translateY={undefined}
            translateZ={undefined}
            localToWorld={undefined}
            worldToLocal={undefined}
            lookAt={undefined}
            add={undefined}
            remove={undefined}
            removeFromParent={undefined}
            clear={undefined}
            getObjectById={undefined}
            getObjectByName={undefined}
            getObjectByProperty={undefined}
            getObjectsByProperty={undefined}
            getWorldPosition={undefined}
            getWorldQuaternion={undefined}
            getWorldScale={undefined}
            getWorldDirection={undefined}
            raycast={undefined}
            traverse={undefined}
            traverseVisible={undefined}
            traverseAncestors={undefined}
            updateMatrix={undefined}
            updateMatrixWorld={undefined}
            updateWorldMatrix={undefined}
            toJSON={undefined}
            clone={undefined}
            copy={undefined}
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
            geometry={undefined}
            morphTargetInfluences={undefined}
            morphTargetDictionary={undefined}
            isMesh={undefined}
            updateMorphTargets={undefined}
            getVertexPosition={undefined}
          >
            <MeshDistortMaterial
              color={"#535494"}
              attach="material"
              distort={0.5}
              speed={0.2}
            />
          </Sphere>
        </Canvas>
        <Canvas className={styles?.distort}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[1, 2, 3]} />
          <Sphere
            args={[1, 100, 200]}
            scale={1.5}
            key={undefined}
            name={undefined}
            id={undefined}
            material={undefined}
            quaternion={undefined}
            onClick={undefined}
            onPointerMissed={undefined}
            onContextMenu={undefined}
            onDoubleClick={undefined}
            onPointerDown={undefined}
            onPointerMove={undefined}
            onPointerUp={undefined}
            onPointerCancel={undefined}
            onPointerEnter={undefined}
            onPointerLeave={undefined}
            onPointerOver={undefined}
            onPointerOut={undefined}
            onWheel={undefined}
            attach={undefined}
            onUpdate={undefined}
            position={undefined}
            up={undefined}
            rotation={undefined}
            matrix={undefined}
            layers={undefined}
            dispose={undefined}
            visible={undefined}
            type={undefined}
            uuid={undefined}
            parent={undefined}
            modelViewMatrix={undefined}
            normalMatrix={undefined}
            matrixWorld={undefined}
            matrixAutoUpdate={undefined}
            matrixWorldAutoUpdate={undefined}
            matrixWorldNeedsUpdate={undefined}
            castShadow={undefined}
            receiveShadow={undefined}
            frustumCulled={undefined}
            renderOrder={undefined}
            animations={undefined}
            userData={undefined}
            customDepthMaterial={undefined}
            customDistanceMaterial={undefined}
            isObject3D={undefined}
            onBeforeRender={undefined}
            onAfterRender={undefined}
            applyMatrix4={undefined}
            applyQuaternion={undefined}
            setRotationFromAxisAngle={undefined}
            setRotationFromEuler={undefined}
            setRotationFromMatrix={undefined}
            setRotationFromQuaternion={undefined}
            rotateOnAxis={undefined}
            rotateOnWorldAxis={undefined}
            rotateX={undefined}
            rotateY={undefined}
            rotateZ={undefined}
            translateOnAxis={undefined}
            translateX={undefined}
            translateY={undefined}
            translateZ={undefined}
            localToWorld={undefined}
            worldToLocal={undefined}
            lookAt={undefined}
            add={undefined}
            remove={undefined}
            removeFromParent={undefined}
            clear={undefined}
            getObjectById={undefined}
            getObjectByName={undefined}
            getObjectByProperty={undefined}
            getObjectsByProperty={undefined}
            getWorldPosition={undefined}
            getWorldQuaternion={undefined}
            getWorldScale={undefined}
            getWorldDirection={undefined}
            raycast={undefined}
            traverse={undefined}
            traverseVisible={undefined}
            traverseAncestors={undefined}
            updateMatrix={undefined}
            updateMatrixWorld={undefined}
            updateWorldMatrix={undefined}
            toJSON={undefined}
            clone={undefined}
            copy={undefined}
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
            geometry={undefined}
            morphTargetInfluences={undefined}
            morphTargetDictionary={undefined}
            isMesh={undefined}
            updateMorphTargets={undefined}
            getVertexPosition={undefined}
          >
            <MeshDistortMaterial
              color={"#363676"}
              attach="material"
              distort={0.5}
              speed={0.2}
            />
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
            Myself <span className={styles?.name}>Soumya</span>
          </>
          <br />
          <>and I am</>
          <div className={styles?.type_animation}>
            <TypeAnimation
              sequence={[
                "Full stack developer",
                2000,
                "Automobile enthusiast",
                2000,
                "Gamer",
                2000,
              ]}
              cursor={true}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
