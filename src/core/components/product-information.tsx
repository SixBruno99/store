import {
  Box,
  Text,
  Flex,
  Grid,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useMediaQuery,
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
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex
      direction={isLargerThan1024 ? "row" : "column"}
      alignItems="center"
      justifyContent="center"
    >
      <ModalOverlay />
      <ModalContent
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="auto"
        maxWidth={isLargerThan1024 ? "4xl" : "360px"}
      >
        <ModalCloseButton />
        <ModalBody
          height="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexDirection={isLargerThan1024 ? "row" : "column"} // Flex direction para o ModalBody
        >
          <Grid
            templateColumns={isLargerThan1024 ? "auto auto" : "auto"} // Ajusta as colunas
            padding={4}
            gap={8}
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={product.image}
              objectFit="scale-down"
              borderTopRadius="12px"
              maxHeight="280px"
              width={isLargerThan1024 ? "" : "100%"}
            />
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
              <Box width={isLargerThan1024 ? "400px" : "full"}>
                <Text>{product.description}</Text>
              </Box>
              <Flex gap={4}>
                <Flex alignItems="center" gap={1}>
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <Text fontWeight="bold" marginLeft={1}>
                    ({product.rating.rate})
                  </Text>
                </Flex>
              </Flex>
              <Text fontWeight="semibold">
                {product.rating.count} avaliações de clientes
              </Text>
            </Flex>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Flex>
  );
};
