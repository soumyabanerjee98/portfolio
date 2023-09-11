import React from "react";
import styles from "./index.module.css";

const Skills = (props: PageProps) => {
  const { id } = props;
  return (
    <div id={id} className={styles?.main}>
      Skills
    </div>
  );
};

export default Skills;
