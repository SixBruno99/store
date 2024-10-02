import { http } from "../services/http";

export const CategoryRepository = {
  findAll: async () => {
    try {
      const response = await http.get("/products/categories");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
