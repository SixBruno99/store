import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Modal,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { IProduct } from "../../types/product";
import { ProductInformation } from "./product-information";

export const Product = (product: IProduct) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan764] = useMediaQuery("(min-width: 764px)");
  // const [isLargerThan420] = useMediaQuery("(min-width: 420px)");

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box width="280px" marginX="auto" marginY="4rem" borderRadius="12px">
      <Image
        src={product.image}
        height="320px"
        width="full"
        objectFit="fill"
        borderTopRadius="12px"
      />
      <Box padding={4} backgroundColor="#27374D" borderBottomRadius="12px">
        <Flex flexDirection="column" width="full" gap={isLargerThan764 ? 4 : 2}>
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
          <Box>
            <Collapse startingHeight={20} in={show}>
              <Text color="white" fontSize="1rem" opacity="0.5">
                {product.description}
              </Text>
            </Collapse>
            <Button variant="link" size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
          </Box>
        </Flex>
        <Flex
          width="full"
          marginY={isLargerThan764 ? 10 : 6}
          gap={4}
          justifyContent="center"
        >
          <Button
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
            <ProductInformation product={product}/>
          </Modal>
        </Flex>
      </Box>
    </Box>
  );
};
