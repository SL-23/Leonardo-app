"use client";

import { Button, Stack, Text, Box, Skeleton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import InfoForm from "../components/InfoForm";

export default function Home() {
  const [userName, setUserName] = useState<string | null>(null);
  const [jobTitle, setJobTitle] = useState<string | null>(null);
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const title = localStorage.getItem("jobTitle");
    setLoading(false);
    console.log(name);
    setUserName(name || null);
    setJobTitle(title || null);
  }, []);

  return (
    <Box>
      <main>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          paddingTop="10rem"
        >
          <Stack gap={10} justifyContent="center">
            <Text as="h2" textStyle="6xl">
              Welcome!
            </Text>
            <Stack>
              {loading ? (
                // minimise CLS
                <Skeleton height="5rem" />
              ) : userName === null || jobTitle === null ? (
                <InfoForm />
              ) : (
                <>
                  <Text textStyle="4xl">
                    {userName}, {jobTitle}
                  </Text>
                  <Button
                    onClick={() => {
                      router.push("/home");
                    }}
                  >
                    Go home page
                  </Button>
                </>
              )}
            </Stack>
          </Stack>
        </Box>
      </main>
    </Box>
  );
}
