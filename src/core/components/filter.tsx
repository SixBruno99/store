import { Flex, Input, Select } from "@chakra-ui/react";
import { useProduct } from "../../contexts/product";
import { CategoryFilterNormalizer } from "../../utils/normalizers/category/filter";

export const Filters = () => {
  const { categories, filterByName, filterByCategory } = useProduct();

  return (
    <Flex marginX="auto" gap={4}>
      <Input
        variant="filled"
        placeholder="Pesquisar..."
        onChange={(event) => filterByName(event.target.value)}
      />
      <Select
        variant="filled"
        placeholder="Selecione uma opção"
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
