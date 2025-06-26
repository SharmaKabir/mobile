import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import apiClient from '../lib/api/apiClient';
import { Category } from '../lib/types';

export default function CategoryFormScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const isEditing = !!id;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const [loading, setLoading] = useState(isEditing); // Only load if editing
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isEditing) {
      const fetchCategory = async () => {
        try {
          const response = await apiClient.get<Category>(`/categories/${id}`);
          const category = response.data;
          setName(category.name);
          setDescription(category.description);
        } catch (error) {
          Alert.alert("Error", "Failed to load category data.");
        } finally {
          setLoading(false);
        }
      };
      fetchCategory();
    }
  }, [id, isEditing]);

  const handleSubmit = async () => {
    if (!name) {
      Alert.alert("Validation Error", "Category name is required.");
      return;
    }
    setSubmitting(true);

    const categoryData = { name, description };

    try {
      if (isEditing) {
        await apiClient.put(`/admin/categories/${id}`, categoryData);
        Alert.alert("Success", "Category updated successfully.");
      } else {
        await apiClient.post('/admin/categories', categoryData);
        Alert.alert("Success", "Category created successfully.");
      }
      router.back();
    } catch (error) {
      console.error("Failed to save category:", error);
      Alert.alert("Error", "Could not save the category.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Category Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="e.g., Clothing" />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="e.g., Shirts, pants, and more" multiline />

      <Button title={submitting ? "Saving..." : (isEditing ? "Update Category" : "Create Category")} onPress={handleSubmit} disabled={submitting} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  loader: { flex: 1, justifyContent: 'center' },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});