import { Flex, Text } from "@chakra-ui/react";
import { useProduct } from "../contexts/product";

export function Home() {
  const { products,  categories } = useProduct();
  console.log("products", products);
  console.log("categories", categories);
  
  return (
    <Flex width="full" height="14" alignItems="center" justifyContent="center">
      <Text fontWeight="bold">Home</Text>
    </Flex>
  );
}
