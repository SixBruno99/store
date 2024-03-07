import { Flex, Text } from "@chakra-ui/react";
import { useProduct } from "../contexts/product";

export function Home() {
  const { products } = useProduct();
  console.log("products", products);
  
  return (
    <Flex width="full" height="14" alignItems="center" justifyContent="center">
      <Text fontWeight="bold">Home</Text>
    </Flex>
  );
}
