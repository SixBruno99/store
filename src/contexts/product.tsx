import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
  } from 'react'
  import { CategoryRepository } from '../repositories/categories'
  import { ProductRepository } from '../repositories/product'
  import { IProduct } from '../types/product'
  
  interface IContextValue {
    products: IProduct[]
    categories: string[]
    findAll(): Promise<void>
  }
  
  export const ProductContext = createContext<IContextValue>({
    products: [],
    categories: [],
    findAll: async () => {},
  })
  
  interface IProps {
    children: ReactNode
  }
  
  export function ProductProvider({ children }: IProps) {
    const [products, setProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<string[]>([])
  
    async function findAll() {
      const products = await ProductRepository.findAll()
      const categories = await CategoryRepository.findAll()
  
      if (!products || !products.length) return
  
      setProducts(products)
      setCategories(categories)
    }
  
    useEffect(() => {
      findAll()
    }, [])
  
    return (
      <ProductContext.Provider value={{ products, categories, findAll }}>
        {children}
      </ProductContext.Provider>
    )
  }
  
  export function useProduct() {
    return useContext(ProductContext)
  }
  