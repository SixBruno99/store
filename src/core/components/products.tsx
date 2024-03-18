import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { IProduct } from "../../types/product";
import { ProductInformation } from "./product-information";
import { CurrencyFormatter } from "../../utils/formatters/price";
import { FaStar } from "react-icons/fa";

export const Product = (product: IProduct) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan764] = useMediaQuery("(min-width: 764px)");
  // const [isLargerThan420] = useMediaQuery("(min-width: 420px)");

  return (
    <Box width="240px" marginX="auto" marginY="4rem" borderRadius="12px">
      <Image
        src={product.image}
        height="240px"
        width="full"
        objectFit="fill"
        borderTopRadius="12px"
      />
      <Box padding={4} backgroundColor="#27374D" borderBottomRadius="12px">
        <Flex flexDirection="column" width="full" gap={2}>
          <Text
            color="white"
            fontWeight="bold"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            fontSize={isLargerThan1024 ? "1rem" : "0.75rem"}
          >
            {product.title}
          </Text>
          <Text color="white" fontSize="1rem" fontWeight="bold" opacity="0.8">
            {CurrencyFormatter.format(product.price)}
          </Text>
          <Flex alignItems="center">
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <Text
              fontWeight="semibold"
              color="white"
              opacity="0.5"
              marginLeft="8px"
            >
              ({product.rating.count})
            </Text>
          </Flex>
        </Flex>
        <Flex
          width="full"
          borderTop="1px solid #F5F5F5"
          justifyContent="center"
          marginTop={4}
        >
          <Button
            variant="link"
            marginTop={2}
            width={isLargerThan1024 ? "120px" : "100px"}
            fontSize={isLargerThan1024 ? "1rem" : "0.75rem"}
            onClick={() => {
              onOpen();
              console.log("produto clicado", product);
            }}
          >
            Vizualizar
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size="4xl">
            <ProductInformation product={product} />
          </Modal>
        </Flex>
      </Box>
    </Box>
  );
};
