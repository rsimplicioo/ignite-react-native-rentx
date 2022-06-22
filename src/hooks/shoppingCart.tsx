import React, {
  createContext,
  useState,
  useContext, 
  useEffect,
  ReactNode
} from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ShoppingCartContextData {
  products: Product[];
  totalProducts: number;
  addToCart: (product: Product) => Promise<void>;
  removeToCart: (id: number) => Promise<void>;
  loading: boolean;
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

const ShoppingCartContext = createContext<ShoppingCartContextData>({} as ShoppingCartContextData);

function ShoppingCartProvider({ children } : ShoppingCartProviderProps) {

  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(products.length);
  const [loading, setLoading] = useState(true);

  async function addToCart(product: Product) {
    
  }

  async function removeToCart(id: number) {
    
  }

  useEffect(() => {
    async function loadShoppingCartData() {
      
    }

    loadShoppingCartData();
  }, [])

  return(
    <ShoppingCartContext.Provider
      value={{
        products,
        totalProducts,
        addToCart,
        removeToCart,
        loading
      }}
    >
      { children }
    </ShoppingCartContext.Provider>
  );
}

function useShoppingCart(): ShoppingCartContextData {
  const context = useContext(ShoppingCartContext);

  return context;
}

export { ShoppingCartProvider, useShoppingCart };