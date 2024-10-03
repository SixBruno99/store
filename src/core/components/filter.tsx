import { Flex, Input, Select, useMediaQuery } from "@chakra-ui/react";
import { useProduct } from "../../contexts/product";
import { CategoryFilterNormalizer } from "../../utils/normalizers/category/filter";

export const Filters = () => {
  const { categories, filterByName, filterByCategory } = useProduct();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex flexDirection={isLargerThan768 ? "row" : "column"} gap={4}>
      <Input
        variant="filled"
        placeholder="Pesquisar..."
        onChange={(event) => filterByName(event.target.value)}
      />
      <Select
        variant="filled"
        placeholder="Escolha uma opção"
        onChange={(event) => filterByCategory(event.target.value)}
      >
        {categories.map((item, index) => (
          <option key={index} value={item}>
            {CategoryFilterNormalizer(item)}
          </option>
        ))}
      </Select>
    </Flex>
  );
};
