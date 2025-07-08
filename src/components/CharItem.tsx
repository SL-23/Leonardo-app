import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface CharItemProps {
  name: string;
  imgSrc: string;
}

const CharItem = ({ name, imgSrc }: CharItemProps) => (
  <Stack alignItems="center" justifyContent="center">
    <Box position="relative" width="10rem" aspectRatio={1}>
      <Image
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        alt={name}
        src={imgSrc}
        style={{ objectFit: "contain" }}
      />
    </Box>
    <Text textAlign="center" textStyle="2xl">
      {name}
    </Text>
  </Stack>
);

export default CharItem;
