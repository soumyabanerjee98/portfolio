import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import CameraControls from "camera-controls";
import Image from "next/image";
import ReactLogo from "../../public/react.png";
import NextLogo from "../../public/next-js.svg";
import NodeLogo from "../../public/node-js.svg";
import MongoLogo from "../../public/mongo.svg";
import TypeScriptLogo from "../../public/typescript.svg";
import { Sphere, MeshDistortMaterial, Html } from "@react-three/drei";
// @ts-ignore
import * as THREE from "three";
import { colorConfig } from "@/config";

CameraControls.install({ THREE });

const positionCoords = {
  x: 0,
  y: 0,
  z: 50,
};
const fov = 10;

type OrbitCameraProps = {
  zoom: boolean;
  zoomedPosition: number[];
};

const OrbitCamera = (props: OrbitCameraProps) => {
  try {
    const { zoom, zoomedPosition } = props;
    const pos = new THREE.Vector3();
    const look = new THREE.Vector3();
    const deg2rad = (degrees: number) => degrees * (Math.PI / 180);
    const camera = useThree((state) => state.camera);
    camera.rotation.set(deg2rad(30), 0, 0);
    const gl = useThree((state) => state.gl);
    const controls = useMemo(
      () => new CameraControls(camera, gl.domElement),
      []
    );
    return useFrame((state, delta) => {
      zoom
        ? pos.set(zoomedPosition?.[0], zoomedPosition?.[1], zoomedPosition?.[2])
        : pos.set(positionCoords?.x, positionCoords?.y, positionCoords?.z);

      state.camera.position.lerp(pos, 0.8);
      state.camera.updateProjectionMatrix();

      controls.setLookAt(
        state.camera.position.x,
        state.camera.position.y,
        state.camera.position.z,
        look?.x,
        look?.y,
        look?.z,
        true
      );
      return controls.update(delta);
    });
  } catch (error) {
    return null;
  }
};

const imageArr = [
  {
    element: (
      <>
        <Image src={TypeScriptLogo} alt="logo" height={35} draggable={false} />
        <div className={styles?.node_text}>TypeScript</div>
      </>
    ),
    position: [0, 1.2, 1],
    texture: "#b0b0b0",
    zoomedPosition: [-15, 30, 10],
  },
  {
    element: (
      <>
        <Image src={ReactLogo} alt="logo" height={35} draggable={false} />
        <div className={styles?.node_text}>React JS</div>
      </>
    ),
    position: [1.2, 0.5, 1.5],
    texture: "#b0b0b0",
    zoomedPosition: [20, 0, 30],
  },
  {
    element: (
      <>
        <Image src={NextLogo} alt="logo" height={35} draggable={false} />
        <div className={styles?.node_text}>Next JS</div>
      </>
    ),
    position: [0.5, -1.2, 1.5],
    texture: "#b0b0b0",
    zoomedPosition: [-5, -20, 30],
  },
  {
    element: (
      <>
        <Image src={NodeLogo} alt="logo" height={35} draggable={false} />
        <div className={styles?.node_text}>Node JS</div>
      </>
    ),
    position: [-1.2, 0.5, -1.5],
    texture: "#b0b0b0",
    zoomedPosition: [-30, 15, -5],
  },
  {
    element: (
      <>
        <Image src={MongoLogo} alt="logo" height={35} draggable={false} />
        <div className={styles?.node_text}>Mongo DB</div>
      </>
    ),
    position: [-0.5, -1.2, -1],
    texture: "#b0b0b0",
    zoomedPosition: [-20, -30, 0],
  },
];

type PlanetSphereProps = {
  index: number;
  rad: number;
  pos: number[];
  scale: number;
  texture: string;
  zoomToView: any;
  zoomedPos: number[];
  element: any;
  zoom: boolean;
  nodeNumber: null | number;
};

const PlanetSphere = (props: PlanetSphereProps) => {
  const {
    index,
    rad,
    pos,
    texture,
    scale,
    zoomToView,
    zoom,
    element,
    zoomedPos,
    nodeNumber,
  } = props;
  return (
    <mesh key={index}>
      {/* @ts-ignore */}
      <Sphere
        args={[rad, 500, 500]}
        position={pos}
        scale={scale}
        onClick={(e: any) => {
          zoomToView(index, e?.object?.position, zoomedPos);
        }}
      >
        <meshStandardMaterial roughness={1} color={texture} />
        <Html>
          <div
            className={
              zoom && nodeNumber === index
                ? styles?.node_element
                : styles?.node_element_noshow
            }
            onClick={() => {
              if (zoom) {
                zoomToView(index, positionCoords, zoomedPos);
              }
            }}
          >
            {element}
          </div>
        </Html>
      </Sphere>
    </mesh>
  );
};

const Skills = (props: PageProps) => {
  const { id } = props;
  const [zoom, setZoom] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [zoomedPos, setZoomedPos] = useState<number[]>([]);
  const zoomToView = (ind: number, pos: any, zoomedPos: number[]) => {
    if (activeNode) {
      setActiveNode(null);
    } else {
      setActiveNode(ind);
    }
    setZoom((prev) => !prev);
    setZoomedPos(zoomedPos);
  };
  return (
    <div id={id} className={styles?.main}>
      <Canvas
        className={styles?.distort}
        camera={{
          position: [positionCoords?.x, positionCoords?.y, positionCoords?.z],
          fov: fov,
        }}
      >
        <OrbitCamera zoom={zoom} zoomedPosition={zoomedPos} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[1, 3, 5]} />
        {/* @ts-ignore */}
        <Sphere args={[1, 500, 500]} scale={1.3}>
          <MeshDistortMaterial
            color={colorConfig?.primary}
            attach="material"
            distort={0.5}
            speed={0.8}
          />
          <Html>
            <div className={zoom ? styles?.header_noshow : styles?.header}>
              Key Skills
            </div>
          </Html>
          {imageArr?.map((i, idx) => (
            <PlanetSphere
              index={idx}
              rad={1}
              scale={0.2}
              pos={i?.position}
              texture={i?.texture}
              zoomToView={zoomToView}
              zoom={zoom}
              element={i?.element}
              zoomedPos={i?.zoomedPosition}
              nodeNumber={activeNode}
            />
          ))}
        </Sphere>
      </Canvas>
    </div>
  );
};

export default Skills;
