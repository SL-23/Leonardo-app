"use client";
import { Center, Text, Button, Stack, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import AuthWrapper from "../../components/AuthWrapper";

const Home = () => {
  const pages = [1, 2, 3];
  const router = useRouter();
  return (
    <AuthWrapper>
      <Center padding="5rem">
        <Stack gap="10">
          <Button
            onClick={() => {
              router.push("/update-info");
            }}
          >
            Update info
          </Button>
          <Text>Select a page</Text>
          <nav aria-labelledby="pagination">
            <Flex as="ul" gap={10}>
              {pages.map((i) => (
                <li key={i}>
                  <Button
                    onClick={() => {
                      router.push(`${i}`);
                    }}
                  >
                    {i}
                  </Button>
                </li>
              ))}
            </Flex>
          </nav>
        </Stack>
      </Center>
    </AuthWrapper>
  );
};

export default Home;
