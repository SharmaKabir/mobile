import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useCart } from '../lib/CartContext';
import apiClient from '../lib/api/apiClient';
import { Product } from '../lib/types';

// This is the base URL for your server's images folder
const IMAGE_BASE_URL = 'http://192.168.1.6:8080/images';

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
      {/* This line correctly combines the base URL and the image filename */}
      <Image source={{ uri: `${IMAGE_BASE_URL}/${product.imageUrl}` }} style={styles.image} />
      
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        
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
          disabled={isOutOfStock}
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