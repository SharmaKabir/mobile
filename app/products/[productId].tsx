// app/products/[productId].tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { PRODUCTS } from '../lib/mockData';
import { useCart } from '../lib/CartContext';

export default function ProductDetailScreen() {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const { addToCart } = useCart();
  
  // In a real app, you would fetch this product from your API
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return <Text>Product not found!</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Button title="Add to Cart" onPress={() => addToCart(product)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  image: { width: '100%', height: 300 },
  details: { padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 20, color: 'green', marginBottom: 16 },
  description: { fontSize: 16, color: '#666', lineHeight: 22, marginBottom: 24 },
});