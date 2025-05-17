import { useState } from "react";
import styles from "./index.module.css";
import "@mantine/core/styles.css";
import { MantineProvider, Title } from "@mantine/core";
import blobsUrl from "./blobs.svg?url";

export default function App() {
  return (
    <MantineProvider>
      <div
        className={styles.main}
        style={{
          backgroundImage: `url("${blobsUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Title className={styles.title}> Hi, I am Nikita </Title>
      </div>
    </MantineProvider>
  );
}
