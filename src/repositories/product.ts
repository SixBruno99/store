import { http } from '../services/http';

export const ProductRepository = {
  findAll: async () => {
    try {
      const response = await http.get('/products')
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
  findOne: async (id: string) => {
    try {
      const response = await http.get(`/products/${id}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
  findByCategory: async (category: string) => {
    try {
      const response = await http.get(`/products/category/${category}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
}
