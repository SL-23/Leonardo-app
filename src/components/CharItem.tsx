"use client";
import client from "@/apollo/apolloClient";
import { GET_CHARACTER_BY_ID } from "@/apollo/queries";
import { useLazyQuery } from "@apollo/client";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

interface CharItemProps {
  id: number;
  name: string;
  imgSrc: string;
}

const CharItem = ({ id, name, imgSrc }: CharItemProps) => {
  const [open, setOpen] = useState(false);
  const [fetchChar, { data, loading, error }] = useLazyQuery(
    GET_CHARACTER_BY_ID,
    {
      client,
    }
  );

  const handleClick = (id: number) => {
    fetchChar({ variables: { id } });
  };

  return (
    <Stack paddingBottom="3rem" alignItems="center" justifyContent="center">
      <Box width="10rem" position="relative" aspectRatio={1}>
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
      <Button
        onClick={() => {
          handleClick(id);
          setOpen(true);
        }}
      >
        More
      </Button>
      <ReactModal preventScroll shouldCloseOnOverlayClick isOpen={open}>
        {loading ? (
          <Text textStyle="3xl">Loading</Text>
        ) : error ? (
          <Text textStyle="3xl">Error</Text>
        ) : data ? (
          <Stack padding="1rem" gap={10}>
            <Text textStyle="3xl">{data.Character.name.full}</Text>
            <Text textStyle="s">{data.Character.description}</Text>
          </Stack>
        ) : (
          <Text textStyle="3xl">No data found</Text>
        )}
        <Button
          onClick={() => {
            const overlay = document.getElementsByClassName(
              "ReactModal__Overlay"
            );
            for (const el of overlay) {
              el.classList.add("ReactModal__Body--open");
            }
            setOpen(false);
          }}
        >
          Close
        </Button>
      </ReactModal>
    </Stack>
  );
};

export default CharItem;
