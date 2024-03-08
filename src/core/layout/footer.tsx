import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex width="full" height="14" alignItems="center" justifyContent="center" backgroundColor="#3A506B">
      <Text fontWeight="bold" color="white">API used: fakestoreapi.com</Text>
    </Flex>
  );
}
