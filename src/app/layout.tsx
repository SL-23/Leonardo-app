"use client";
import "./globals.css";
import {
  Box,
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
  Text,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(defaultConfig, config);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div id="__next"></div>
        <ChakraProvider value={system}>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            paddingTop="10rem"
          >
            {children}
          </Box>
          <Box position="absolute" bottom={0} right={0}>
            <footer>
              <Text textStyle="lg"> challenge version v3.5 - by SL 2025</Text>
            </footer>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
