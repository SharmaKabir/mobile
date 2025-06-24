// app/categories/[categoryId].tsx
import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { PRODUCTS, CATEGORIES } from '../lib/mockData';
import { Product } from '../lib/types';
import { Link } from 'expo-router';
import { TouchableOpacity, Image } from 'react-native';

// Reusing the ProductCard from the home screen would be ideal
const ProductCard = ({ item }: { item: Product }) => (
  <Link href={`/products/${item.id}`} asChild>
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.productName}>{item.name}</Text>
    </TouchableOpacity>
  </Link>
);


export default function CategoryProductsScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const navigation = useNavigation();

  const category = CATEGORIES.find(c => c.id === categoryId);
  const products = PRODUCTS.filter((p) => p.categoryId === categoryId);
  
  // Set the header title dynamically
  useLayoutEffect(() => {
    navigation.setOptions({ title: category ? category.name : 'Category' });
  }, [navigation, category]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListEmptyComponent={<Text>No products found in this category.</Text>}
      />
    </View>
  );
}
// You can reuse styles from the home screen
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    card: { flex: 1, margin: 8, backgroundColor: 'white', padding: 10, borderRadius: 8, alignItems: 'center' },
    image: { width: 150, height: 150, marginBottom: 10 },
    productName: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
});