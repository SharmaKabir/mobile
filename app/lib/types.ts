// // app/lib/types.ts
// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   imageUrl: string;
//   description: string;
//   categoryId: string;
// }

// export interface Category {
//   id:string;
//   name: string;
// }

// export interface CartItem {
//   product: Product;
//   quantity: number;
// }
export interface Category {
    id: number;
    name: string;
    description: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    // This is the crucial change: A Product contains a full Category object.
    category: Category; 
    stockQuantity: number;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface OrderItem {
    id: number;
    product: Product;
    quantity: number;
    priceAtPurchase: number;
}

export interface Order {
    id: number;
    orderDate: string;
    totalAmount: number;
    shippingFullName: string;
    shippingAddressLine1: string;
    orderItems: OrderItem[];
}