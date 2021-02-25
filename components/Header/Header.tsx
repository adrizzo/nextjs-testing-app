import React from "react";
import styles from "./header.module.scss"

interface Props {
  children: string;
}

function Header({ children }: Props) {
  return <h1 className={styles.h1}>{children}</h1>;
}

export default Header;
