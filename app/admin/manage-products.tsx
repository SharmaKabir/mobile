import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert, ActivityIndicator, Image } from 'react-native';
import apiClient from '../lib/api/apiClient';
import { useFocusEffect, useRouter } from 'expo-router';
import { Product } from '../lib/types';

export default function ManageProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      Alert.alert("Error", "Could not fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchProducts();
    }, [])
  );

  const handleDelete = (productId: string) => {
    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await apiClient.delete(`/admin/products/${productId}`);
              Alert.alert("Success", "Product deleted successfully.");
              fetchProducts(); // Refresh the list
            } catch (error) {
              console.error("Failed to delete product:", error);
              Alert.alert("Error", "Could not delete product.");
            }
          },
        },
      ]
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Product" onPress={() => router.push('/admin/product-form')} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttons}>
              <Button title="Edit" onPress={() => router.push(`/admin/product-form?id=${item.id}`)} />
              <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  loader: { flex: 1, justifyContent: 'center' },
  productItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  productImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
  productInfo: { flex: 1 },
  productName: { fontWeight: 'bold' },
  buttons: { flexDirection: 'row', gap: 5 },
});