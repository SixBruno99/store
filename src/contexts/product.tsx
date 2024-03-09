import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CategoryRepository } from "../repositories/categories";
import { ProductRepository } from "../repositories/product";
import { IProduct } from "../types/product";

interface IContextValue {
  products: IProduct[];
  filteredProducts: IProduct[];
  categories: string[];
  findAll(): Promise<void>;
  setCategoryFilter(activeFilter: string): void;
}

export const ProductContext = createContext<IContextValue>({
  products: [],
  filteredProducts: [],
  categories: [],
  findAll: async () => {},
  setCategoryFilter: async () => {},
});

interface IProps {
  children: ReactNode;
}

export function ProductProvider({ children }: IProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const setCategoryFilter = (activeFilter: string) => {
    if (!activeFilter) return;

    const filteredProducts = products.filter(
      (product) => product.category === activeFilter
    );
    console.log("produtos filtrados:", filteredProducts);

    setFilteredProducts(filteredProducts);
  };

  async function findAll() {
    const products = await ProductRepository.findAll();
    const categories = await CategoryRepository.findAll();

    if (!products || !products.length) return;

    setProducts(products);
    setFilteredProducts(products);
    setCategories(categories);
  }

  useEffect(() => {
    findAll();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, filteredProducts, categories, findAll, setCategoryFilter }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
