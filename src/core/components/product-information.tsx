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
        <ModalHeader textAlign="center">{product.title}</ModalHeader>
        <Flex padding={8} gap={4}>
          <ModalCloseButton />
          <Image
            src={product.image}
            height="360px"
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
                R$ {product.price}
              </Text>
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
