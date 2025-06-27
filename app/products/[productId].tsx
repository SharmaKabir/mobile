// // // // app/products/[productId].tsx
// // // import React from 'react';
// // // import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
// // // import { useLocalSearchParams } from 'expo-router';
// // // import { PRODUCTS } from '../lib/mockData';
// // // import { useCart } from '../lib/CartContext';

// // // export default function ProductDetailScreen() {
// // //   const { productId } = useLocalSearchParams<{ productId: string }>();
// // //   const { addToCart } = useCart();
  
// // //   // In a real app, you would fetch this product from your API
// // //   const product = PRODUCTS.find((p) => p.id === productId);

// // //   if (!product) {
// // //     return <Text>Product not found!</Text>;
// // //   }

// // //   return (
// // //     <ScrollView style={styles.container}>
// // //       <Image source={{ uri: product.imageUrl }} style={styles.image} />
// // //       <View style={styles.details}>
// // //         <Text style={styles.name}>{product.name}</Text>
// // //         <Text style={styles.price}>${product.price.toFixed(2)}</Text>
// // //         <Text style={styles.description}>{product.description}</Text>
// // //         <Button title="Add to Cart" onPress={() => addToCart(product)} />
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: 'white' },
// // //   image: { width: '100%', height: 300 },
// // //   details: { padding: 20 },
// // //   name: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
// // //   price: { fontSize: 20, color: 'green', marginBottom: 16 },
// // //   description: { fontSize: 16, color: '#666', lineHeight: 22, marginBottom: 24 },
// // // });

// // import React, { useState, useEffect } from 'react';
// // import { View, Text, Image, StyleSheet, Button, ScrollView, ActivityIndicator, Alert } from 'react-native';
// // import { useLocalSearchParams } from 'expo-router';
// // import { useCart } from '../lib/CartContext';
// // import apiClient from '../lib/api/apiClient';
// // import { Product } from '../lib/types';

// // export default function ProductDetailScreen() {
// //   const { productId } = useLocalSearchParams<{ productId: string }>();
// //   const { addToCart } = useCart();

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     if (!productId) return;
// //     const fetchProduct = async () => {
// //       try {
// //         const response = await apiClient.get<Product>(`/products/${productId}`);
// //         setProduct(response.data);
// //       } catch (error) {
// //         console.error("Failed to fetch product details", error);
// //         Alert.alert("Error", "Could not load product details.");
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchProduct();
// //   }, [productId]);

// //   if (isLoading) {
// //     return <ActivityIndicator size="large" style={styles.loader} />;
// //   }

// //   if (!product) {
// //     return <Text style={styles.error}>Product not found.</Text>;
// //   }

// //   const handleAddToCart = () => {
// //     addToCart(product);
    
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       <Image source={{ uri: product.imageUrl }} style={styles.image} />
// //       <View style={styles.details}>
// //         <Text style={styles.name}>{product.name}</Text>
// //         <Text style={styles.price}>${product.price.toFixed(2)}</Text>
// //         <Text style={styles.description}>{product.description}</Text>
// //         <Button title="Add to Cart" onPress={handleAddToCart} />
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: 'white' },
// //   loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// //   error: { textAlign: 'center', marginTop: 20, color: 'red', fontSize: 16 },
// //   image: { width: '100%', height: 350 },
// //   details: { padding: 20 },
// //   name: { fontSize: 26, fontWeight: 'bold', marginBottom: 8 },
// //   price: { fontSize: 22, color: 'green', marginBottom: 16 },
// //   description: { fontSize: 16, color: '#666', lineHeight: 24, marginBottom: 24 },
// // });

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, Button, ScrollView, ActivityIndicator, Alert } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';
// import { useCart } from '../lib/CartContext';
// import apiClient from '../lib/api/apiClient';
// import { Product } from '../lib/types';

// export default function ProductDetailScreen() {
//   const { productId } = useLocalSearchParams<{ productId: string }>();
//   const { addToCart } = useCart();

//   const [product, setProduct] = useState<Product | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!productId) return;
//     const fetchProduct = async () => {
//       try {
//         const response = await apiClient.get<Product>(`/products/${productId}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Failed to fetch product details", error);
//         Alert.alert("Error", "Could not load product details.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (isLoading) {
//     return <ActivityIndicator size="large" style={styles.loader} />;
//   }

//   if (!product) {
//     return <Text style={styles.error}>Product not found.</Text>;
//   }

//   const handleAddToCart = () => {
//   // We ONLY call addToCart - alerts are now handled within CartContext
//   addToCart(product);
// };

//   return (
//     <ScrollView style={styles.container}>
//       <Image source={{ uri: product.imageUrl }} style={styles.image} />
//       <View style={styles.details}>
//         <Text style={styles.name}>{product.name}</Text>
//         <Text style={styles.price}>${product.price.toFixed(2)}</Text>
//         <Text style={styles.description}>{product.description}</Text>
//         <Button title="Add to Cart" onPress={handleAddToCart} />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
//   loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   error: { textAlign: 'center', marginTop: 20, color: 'red', fontSize: 16 },
//   image: { width: '100%', height: 350 },
//   details: { padding: 20 },
//   name: { fontSize: 26, fontWeight: 'bold', marginBottom: 8 },
//   price: { fontSize: 22, color: 'green', marginBottom: 16 },
//   description: { fontSize: 16, color: '#666', lineHeight: 24, marginBottom: 24 },
// });
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useCart } from '../lib/CartContext';
import apiClient from '../lib/api/apiClient';
import { Product } from '../lib/types';

export default function ProductDetailScreen() {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const { addToCart, items } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;
    const fetchProduct = async () => {
      try {
        const response = await apiClient.get<Product>(`/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product details", error);
        Alert.alert("Error", "Could not load product details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (!product) {
    return <Text style={styles.error}>Product not found.</Text>;
  }

  const handleAddToCart = () => {
    // Check against stock before adding
    const itemInCart = items.find(item => item.product.id === product.id);
    const quantityInCart = itemInCart ? itemInCart.quantity : 0;

    if (quantityInCart >= product.stockQuantity) {
      Alert.alert("Stock Limit", "You have already added all available stock to your cart.");
      return;
    }
    addToCart(product);
  };

  const isOutOfStock = product.stockQuantity <= 0;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        
        {/* --- NEW: Stock Display --- */}
        {isOutOfStock ? (
          <Text style={styles.stockTextError}>Out of Stock</Text>
        ) : (
          <Text style={styles.stockText}>
            {product.stockQuantity} units available
          </Text>
        )}

        <Text style={styles.description}>{product.description}</Text>
        <Button 
          title={isOutOfStock ? "Out of Stock" : "Add to Cart"} 
          onPress={handleAddToCart}
          disabled={isOutOfStock} // Disable button if out of stock
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { textAlign: 'center', marginTop: 20, color: 'red', fontSize: 16 },
  image: { width: '100%', height: 350 },
  details: { padding: 20 },
  name: { fontSize: 26, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 22, color: 'green', marginBottom: 16 },
  description: { fontSize: 16, color: '#666', lineHeight: 24, marginBottom: 24 },
  stockText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    fontWeight: '500',
  },
  stockTextError: {
    fontSize: 16,
    color: 'red',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});