"use client";
import { Center, Text, Button, Stack, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import AuthWrapper from "../../components/AuthWrapper";

const Home = () => {
  const pages = [1, 2, 3];
  const router = useRouter();
  return (
    <AuthWrapper>
      <Center padding="15rem">
        <Stack gap="10">
          <Button
            onClick={() => {
              router.push("/update-info");
            }}
          >
            Update info
          </Button>
          <Text>Select a page</Text>
          <nav>
            <Flex gap={10}>
              {pages.map((i) => (
                <Button
                  onClick={() => {
                    router.push(`${i}`);
                  }}
                  key={i}
                >
                  {i}
                </Button>
              ))}
            </Flex>
          </nav>
        </Stack>
      </Center>
    </AuthWrapper>
  );
};

export default Home;
