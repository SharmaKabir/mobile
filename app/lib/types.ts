// app/lib/types.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  categoryId: string;
}

export interface Category {
  id:string;
  name: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}