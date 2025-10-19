export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}


// Extends Product with quantity for the cart
export interface CartItem extends Product {
  quantity: number;
}