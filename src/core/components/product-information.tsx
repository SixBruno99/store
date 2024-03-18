import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { CurrencyFormatter } from "../../utils/formatters/price";

export interface IProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export const ProductInformation = ({ product }: IProps) => {
  return (
    <Box>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(2, 1fr)" padding={4} gap={4}>
            <GridItem >
              <Image
                src={product.image} 
                objectFit="fill"
                borderTopRadius="12px"
              />
            </GridItem>
            <GridItem>
              <Flex
                height="full"
                flexDirection="column"
                justifyContent="center"
                gap={2}
              >
                <Text fontSize={24} fontWeight="bold">
                  {product.title}
                </Text>
                <Box>
                  <Text fontSize={24} fontWeight="bold">
                    {CurrencyFormatter.format(product.price)} ou
                  </Text>
                  <Text fontSize={16} fontWeight="semibold">
                    em 6x {CurrencyFormatter.format(product.price / 6)}
                  </Text>
                </Box>
                <Box width="400px">
                  <Text>{product.description}</Text>
                </Box>
                <Flex gap={4}>
                  <Flex alignItems="center" gap={1}>
                    <FaStar color="yellow" />
                    <FaStar color="yellow" />
                    <FaStar color="yellow" />
                    <FaStar color="yellow" />
                    <FaStar color="yellow" />
                    <Text fontWeight="bold" marginLeft={1}>({product.rating.rate})</Text>
                  </Flex>
                </Flex>
                  <Text fontWeight="semibold" >
                    {product.rating.count} avaliações de clientes
                  </Text>
              </Flex>
            </GridItem>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Box>
  );
};
