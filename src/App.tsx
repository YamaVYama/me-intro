import styles from "./index.module.css";
import "@mantine/core/styles.css";
import { Badge, Image, MantineProvider, Text, Title } from "@mantine/core";
import blobsUrl from "./blobs.svg?url";
import imgUrl from "./img.jpg";

const IMG_SIZE = 160;

export default function App() {
  return (
    <MantineProvider>
      <img src={blobsUrl} className={styles.bg} />
      <div className={styles.main}>
        <div className={styles.info}>
          <Image
            className={styles.img}
            src={imgUrl}
            radius="100%"
            h={IMG_SIZE}
            w={IMG_SIZE}
          />
          <div className={styles.infoSub}>
            <Title className={styles.title}>Меня зовут Никита!</Title>
            <Title className={styles.title}>Я передний конец рабочий</Title>
            <Text c="white" size="14px">
              Моя писать почти джава но скрипт
            </Text>
            <Text c="white" size="14px">
              Чут чут реакт
            </Text>
            <Text c="white" size="14px">
              Хачу многа деняков
            </Text>
          </div>
        </div>
        <Text mt="lg" mb="lg" p="sm" c="white" size="16px">
          Stack
        </Text>
        <div className={styles.infoStack}>
          <Badge color="yellow" size="lg" c="dark">
            JS
          </Badge>
          <Badge color="cyan" size="lg" c="dark">
            TS
          </Badge>
          <Badge color="blue" size="lg" c="dark">
            React
          </Badge>
          <Badge color="grape" size="lg" c="dark">
            Redux
          </Badge>
          <Badge color="yellow" size="lg" c="dark">
            Vite
          </Badge>
        </div>
      </div>
    </MantineProvider>
  );
}
