import { Box, Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";

import FakeApiLogo from "../../assets/images/logo.png";

export function Header() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Box width="full" backgroundColor="#B4B4B8">
      <Flex
        height="14"
        maxWidth="8xl"
        marginX={isLargerThan1024 ? "auto" : 8}
        alignItems="center"
        justifyContent="space-between"
        borderBottom="solid 1px white"
      >
        <Image src={FakeApiLogo} width="50px" />
        <Heading color="white">Lojinha</Heading>
        <Box width="50px" />
      </Flex>
    </Box>
  );
}
