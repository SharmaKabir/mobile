// // (tabs)/index.tsx
// import React from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { Link } from 'expo-router';
// import { PRODUCTS } from '../lib/mockData';
// import { Product } from '../lib/types';

// // This would be a separate component in a real app (e.g., src/components/ProductCard.tsx)
// const ProductCard = ({ item }: { item: Product }) => (
//   <Link href={`/products/${item.id}`} asChild>
//     <TouchableOpacity style={styles.card}>
//       <Image source={{ uri: item.imageUrl }} style={styles.image} />
//       <Text style={styles.productName}>{item.name}</Text>
//       <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//     </TouchableOpacity>
//   </Link>
// );

// export default function ShopScreen() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={PRODUCTS}
//         renderItem={({ item }) => <ProductCard item={item} />}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         ListHeaderComponent={<Text style={styles.header}>Featured Products</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f5f5f5' },
//   header: { fontSize: 24, fontWeight: 'bold', margin: 16 },
//   card: { flex: 1, margin: 8, backgroundColor: 'white', padding: 10, borderRadius: 8, alignItems: 'center' },
//   image: { width: 150, height: 150, marginBottom: 10 },
//   productName: { fontSize: 16, fontWeight: '600' },
//   productPrice: { fontSize: 14, color: 'green', marginTop: 4 },
// });

import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import apiClient from '../lib/api/apiClient';
import ProductCard from '../components/ProductCard'; // We will create this reusable component next
import { Product } from '../lib/types';

export default function ShopScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get('/products');
        setProducts(response.data);
        setError(null);
      } catch (e) {
        setError('Failed to fetch products. Please try again later.');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.list}
      ListHeaderComponent={<Text style={styles.header}>Featured Products</Text>}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    marginLeft: 8,
  },
});