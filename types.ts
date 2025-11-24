

export interface MenuItem {
  name: string;
  brand?: 'bergamota' | 'lubisca';
  ingredients?: string[]; // Changed from description string to ingredients array for bullet points
  price?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export type MenuData = MenuSection[];

export type View = 'home' | 'event' | 'menu' | 'reservation' | 'chefs' | 'team' | 'manifesto' | 'contact' | 'compact' | 'all' | 'store' | 'checkout' | 'product-details' | 'blog' | 'blog-post';

// Store & Cart Types
export interface Product {
  id: number;
  name: string;
  price: number; // Numeric for calculations
  displayPrice: string; // Formatted string
  description: string;
  type: 'lubisca' | 'bergamota' | 'merch' | 'ticket';
  soldOut: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, delta: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}
