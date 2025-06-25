import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import apiClient from '../lib/api/apiClient';
import { Product } from '../lib/types';

export default function ProductFormScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const isEditing = !!id;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(isEditing);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isEditing) {
      const fetchProduct = async () => {
        try {
          const response = await apiClient.get<Product>(`/products/${id}`);
          const product = response.data;
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price.toString());
          setImageUrl(product.imageUrl);
        } catch (error) {
          Alert.alert("Error", "Failed to load product data.");
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id, isEditing]);

  const handleSubmit = async () => {
    if (!name || !price || !imageUrl) {
      Alert.alert("Validation Error", "Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    const productData = {
      name,
      description,
      price: parseFloat(price),
      imageUrl,
    };

    try {
      if (isEditing) {
        await apiClient.put(`/admin/products/${id}`, productData);
        Alert.alert("Success", "Product updated successfully.");
      } else {
        await apiClient.post('/admin/products', productData);
        Alert.alert("Success", "Product added successfully.");
      }
      router.back();
    } catch (error) {
      console.error("Failed to save product:", error);
      Alert.alert("Error", "Could not save product.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Product Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} multiline />

      <Text style={styles.label}>Price</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />

      <Text style={styles.label}>Image URL</Text>
      <TextInput style={styles.input} value={imageUrl} onChangeText={setImageUrl} />

      <Button title={submitting ? "Saving..." : "Save Product"} onPress={handleSubmit} disabled={submitting} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  loader: { flex: 1, justifyContent: 'center' },
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});