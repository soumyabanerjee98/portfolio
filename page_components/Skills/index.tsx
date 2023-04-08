import React, { useState } from "react";
import styles from "./index.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";
import Image from "next/image";
import ReactLogo from "../../public/react.png";
import NextLogo from "../../public/next-js.svg";
import NodeLogo from "../../public/node-js.svg";
import MongoLogo from "../../public/mongo.svg";
import TypeScriptLogo from "../../public/typescript.svg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const grid = [
  [
    <Image src={TypeScriptLogo} alt="logo" height={35} draggable={false} />,
    <Image src={ReactLogo} alt="logo" height={35} draggable={false} />,
    <Image src={NextLogo} alt="logo" height={35} draggable={false} />,
    <Image src={NodeLogo} alt="logo" height={35} draggable={false} />,
    <Image src={MongoLogo} alt="logo" height={35} draggable={false} />,
  ],
];
const size = 60;
const gap = 50;

type SquareType = {
  active: any;
  setActive: any;
  colIndex: number;
  rowIndex: number;
  x: any;
  y: any;
  element: any;
};

const Square = ({
  active,
  setActive,
  colIndex,
  rowIndex,
  x,
  y,
  element,
}: SquareType) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      className={styles?.square_bg}
      style={{
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
        animationDelay: `${colIndex}s`,
      }}
    >
      {element}
    </motion.div>
  );
};

const Skills = (props: PageProps) => {
  const { id } = props;
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  return (
    <div id={id} className={styles?.main}>
      <Canvas className={styles?.distort}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[1, 3, 5]} />
        <Sphere
          args={[1.5, 500, 500]}
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
      <div className={styles?.header}>Key Skills</div>
      <motion.div
        animate={{ "--base-hue": 360 } as any}
        initial={{ "--base-hue": 0 } as any}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        style={{ width: "100%", height: "100%" }}
      >
        <motion.div
          className={styles?.grid_wrapper}
          style={{
            width: (size + gap) * 5 - gap,
            height: (size + gap) * 4 - gap,
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_item, colIndex) => (
              <Square
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={rowIndex + colIndex}
                element={_item}
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
