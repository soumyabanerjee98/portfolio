import React from "react";
import styles from "./index.module.css";

const Contact = (props: PageProps) => {
  const { id } = props;
  return (
    <div id={id} className={styles?.main}>
      Contact
    </div>
  );
};

export default Contact;
