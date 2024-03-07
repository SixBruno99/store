import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
  } from 'react'
  import { ProductRepository } from '../repositories/product'
  import { IProduct } from '../types/product'
  
  interface IContextValue {
    products: IProduct[]
    findAll(): Promise<void>
  }
  
  export const ProductContext = createContext<IContextValue>({
    products: [],
    findAll: async () => {},
  })
  
  interface IProps {
    children: ReactNode
  }
  
  export function ProductProvider({ children }: IProps) {
    const [products, setProducts] = useState<IProduct[]>([])
  
    async function findAll() {
      const products = await ProductRepository.findAll()
  
      if (!products || !products.length) return
  
      setProducts(products)
    }
  
    useEffect(() => {
      findAll()
    }, [])
  
    return (
      <ProductContext.Provider value={{ products, findAll }}>
        {children}
      </ProductContext.Provider>
    )
  }
  
  export function useProduct() {
    return useContext(ProductContext)
  }
  