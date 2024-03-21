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
  filteredProducts: IProduct[];
  products: IProduct[];
  categories: string[];
  findAll(): Promise<void>;
  filterByName(search: string): void;
  filterByCategory(activeFilter: string): void;
}

export const ProductContext = createContext<IContextValue>({
  filteredProducts: [],
  products: [],
  categories: [],
  findAll: async () => {},
  filterByName: async () => {},
  filterByCategory: async () => {},
});

interface IProps {
  children: ReactNode;
}

export function ProductProvider({ children }: IProps) {
  // usar Reducers
  const [products, setProducts] = useState<IProduct[]>([]);
  // usar Reducers
  const [categories, setCategories] = useState<string[]>([]);
  // usar Reducers
  // mudar pra useRef
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const filterByName = (search: string) => {
    if (search === "") findAll();
    if (!search) return;
    console.log("search", search);

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    console.log("produtos filtrados:", filteredProducts);

    setFilteredProducts(filteredProducts);
  };

  const filterByCategory = (activeFilter: string) => {
    console.log("activeFilter", activeFilter);

    if (activeFilter === "Todos") return setFilteredProducts(products);

    if (!activeFilter) return;

    const filteredProducts = products.filter(
      (product) => product.category === activeFilter
    );
    setFilteredProducts(filteredProducts);
  };

  async function findAll() {
    const products = await ProductRepository.findAll();
    const categories = await CategoryRepository.findAll();
    categories.unshift("Todos");

    if (!products || !products.length) return;

    setProducts(products);
    setCategories(categories);
    setFilteredProducts(products);
  }

  useEffect(() => {
    findAll();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        categories,
        findAll,
        filterByName,
        filterByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
