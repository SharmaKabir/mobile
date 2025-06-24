// app/lib/mockData.ts
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'electronics', name: 'Electronics' },
  { id: 'books', name: 'Books' },
  { id: 'clothing', name: 'Clothing' },
];

export const PRODUCTS: Product[] = [
  { id: '1', name: 'Wireless Headphones', price: 99.99, imageUrl: 'https://placehold.co/400', description: 'High-fidelity sound.', categoryId: 'electronics' },
  { id: '2', name: 'Laptop Pro', price: 1299.99, imageUrl: 'https://placehold.co/400', description: 'Powerful and portable.', categoryId: 'electronics' },
  { id: '3', name: 'The Great Gatsby', price: 10.99, imageUrl: 'https://placehold.co/400', description: 'A classic novel.', categoryId: 'books' },
  { id: '4', name: 'Classic T-Shirt', price: 19.99, imageUrl: 'https://placehold.co/400', description: '100% cotton.', categoryId: 'clothing' },
  // ... add more products
];