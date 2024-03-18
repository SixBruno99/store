import {
  Box,
  Flex,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
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
        <Flex padding={8} gap={4}>
          <ModalCloseButton />
          <Image
            src={product.image}
            height="360px"
            maxWidth="40%"
            width="full"
            objectFit="fill"
            borderTopRadius="12px"
          />
          <ModalBody>
            <Flex
              height="full"
              flexDirection="column"
              justifyContent="space-between"
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
                <Flex alignItems="center" gap={2}>
                  <FaStar color="yellow" />
                  <Text fontWeight="bold">{product.rating.rate}</Text>
                </Flex>
                <Text fontWeight="semibold">
                  {product.rating.count} avaliações de clientes
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        </Flex>
      </ModalContent>
    </Box>
  );
};
