import React from "react";
import Link from "next/link";
import { Box } from "@material-ui/core";
import styles from "./navlist.module.scss";

function NavList() {
  return (
    <>
      <Box>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/about">About</Link>
      </Box>
    </>
  );
}

export default NavList;
