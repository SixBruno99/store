import { Box, Flex, Image } from "@chakra-ui/react";

import FakeApiLogo from "../../images/logo.png";

export function Header() {
  return (
    <Box width="full" backgroundColor="#B4B4B8">

    <Flex maxWidth="8xl" height="14" alignItems="center" justifyContent="space-between" margin="auto">
      <Image src={FakeApiLogo} width="50px"/>
    </Flex>
    </Box>
  );
}
