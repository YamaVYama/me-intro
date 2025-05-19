import s from "./index.module.css";
import "@mantine/core/styles.css";
import {
  Badge,
  Button,
  Flex,
  Image,
  MantineProvider,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import imgUrl from "./img.jpg";

const IMG_SIZE = 160;

export default function App() {
  return (
    <MantineProvider>
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        pt="120px"
        c="white"
        className={s.imgAnim}
      >
        <Flex wrap="wrap" align="center" justify="center" gap="sm">
          <Image src={imgUrl} radius="100%" h={IMG_SIZE} w={IMG_SIZE} />
          <Flex direction="column" align="center" justify="center" w="100%">
            <Title>Меня зовут Никита!</Title>
            <Title>Я делаю frontend </Title>
          </Flex>
        </Flex>
        <Text size="24px" p="lg">
          Мой стек
        </Text>
        <Flex
          w="320px"
          gap="0.4rem"
          align="center"
          justify="center"
          wrap="wrap"
        >
          <Badge
            variant="gradient"
            gradient={{ from: "blue", to: "yellow", deg: 74 }}
            size="lg"
            c="dark"
          >
            JavaScript
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "blue", to: "white", deg: 74 }}
            size="lg"
            c="dark"
          >
            HTML
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "cyan", to: "violet", deg: 77 }}
            size="lg"
            c="dark"
          >
            CSS/SCSS/CSS modules
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 32 }}
            size="lg"
            c="dark"
          >
            TypeScript
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "green", to: "yellow", deg: 99 }}
            size="lg"
            c="dark"
          >
            NODEJS
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "red", to: "orange", deg: 99 }}
            size="lg"
            c="dark"
          >
            Effector
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "cyan", to: "yellow", deg: 99 }}
            size="lg"
            c="dark"
          >
            JEST
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "green", to: "violet", deg: 57 }}
            size="lg"
            c="dark"
          >
            React
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "violet", to: "blue", deg: 44 }}
            size="lg"
            c="dark"
          >
            Redux
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "yellow", to: "red", deg: 99 }}
            size="lg"
            c="dark"
          >
            Vite
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "cyan", to: "white", deg: 99 }}
            size="lg"
            c="dark"
          >
            WEBPACK
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "cyan", to: "blue", deg: 99 }}
            size="lg"
            c="dark"
          >
            GIT
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "yellow", to: "orange", deg: 99 }}
            size="lg"
            c="dark"
          >
            GITLAB
          </Badge>
          <Badge
            variant="gradient"
            gradient={{ from: "cyan", to: "gray", deg: 99 }}
            size="lg"
            c="dark"
          >
            DOCKER
          </Badge>
        </Flex>
        <Stack
          className={s.stck}
          my="3rem"
          p="1.4rem"
          bg="rgba(22, 22, 24, 0.3)"
        >
          <Text>Опыт работы ~5 лет</Text>
          <span>
            <Badge color="green" c="dark">
              СберОбр
            </Badge>{" "}
            - Senior frontend developer - 2 года 7 месяцев
          </span>
          <span>
            <Badge color="orange">DSR</Badge> - Middle frontend developer - 6
            месяцев
          </span>
          <span>
            <Badge color="yellow" c="dark">
              DataArt
            </Badge>{" "}
            - Junior/Middle frontend developer - 1 год 10 месяцев
          </span>
        </Stack>
        <Stack>
          <UnstyledButton c="white" component="a" href="https://t.me/yamapit">
            tg: @yamapit
          </UnstyledButton>
        </Stack>
        <Button
          variant="gradient"
          gradient={{ from: "red", to: "violet", deg: 74 }}
          my="2rem"
          radius="xl"
          size="md"
          miw="144px"
          component="a"
          href="https://career.habr.com/yamayam"
        >
          Резюме
        </Button>
      </Flex>
    </MantineProvider>
  );
}
