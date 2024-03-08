import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { IProduct } from "../../types/product";

export const Product = (product: IProduct) => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan764] = useMediaQuery("(min-width: 764px)");
  // const [isLargerThan420] = useMediaQuery("(min-width: 420px)");

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  // function handleNavigate(navigator: string | undefined) {
  //   if (!navigator) return;
  //   window.open(`${navigator}`, "_blank");
  // }

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
            <Button variant='link' size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
          </Box>
          {/* <Text color="white" fontSize={isLargerThan1024 ? "1.25rem" : "1rem"}>
            {product.description}
            {product.collaborator && (
              <Link
                href={product.collaborator.instagram}
                fontWeight="bold"
                isExternal
              >
                {product.collaborator.name}
              </Link>
            )}
          </Text> */}
        </Flex>
        {/* <Flex
          width="full"
          marginY={isLargerThan764 ? 10 : 6}
          gap={4}
          justifyContent="center"
        >
          <Button
            width={isLargerThan1024 ? "120px" : "100px"}
            fontSize={isLargerThan1024 ? "1rem" : "0.75rem"}
            onClick={() => {
              // handleNavigate(product.link);
            }}
          >
            Vizualizar
          </Button>
        </Flex> */}
      </Box>
    </Box>
  );
};
