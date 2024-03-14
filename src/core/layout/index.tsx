import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";

export function MainLayout() {
  return (
    <Box>
      <Header />
      <Flex width="full" minHeight="calc(100vh - 112px)" bgGradient="linear(to-b, #B4B4B8, #C7C8CC)">
        <Outlet />
      </Flex>
      <Footer />
    </Box>
  );
}
