import { Box, Select } from "@chakra-ui/react";
import { useProduct } from "../../contexts/product";
import { CategoryFilterNormalizer } from "../../utils/normalizers/category/filter";

export const Filters = () => {
  const { categories, setCategoryFilter } = useProduct();

  return (
    <Box marginX="auto">
      <Select
        placeholder="Selecione uma opção"
        onChange={(event) => setCategoryFilter(event.target.value)}
      >
        {categories.map((item, index) => (
          <option key={index} value={item}>
            {CategoryFilterNormalizer(item)}
          </option>
        ))}
      </Select>
    </Box>
  );
};
