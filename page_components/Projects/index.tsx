import React from "react";
import styles from "./index.module.css";

const Projects = (props: PageProps) => {
  const { id } = props;
  return (
    <div id={id} className={styles?.main}>
      Projects
    </div>
  );
};

export default Projects;
