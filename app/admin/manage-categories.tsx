import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';
import apiClient from '../lib/api/apiClient';
import { useFocusEffect, useRouter } from 'expo-router';
import { Category } from '../lib/types';

export default function ManageCategoriesScreen() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchCategories = async () => {
    try {
      const response = await apiClient.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      Alert.alert("Error", "Could not fetch categories.");
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchCategories();
    }, [])
  );

  const handleDelete = (categoryId: number) => {
    Alert.alert(
      "Delete Category",
      "Are you sure you want to delete this category? This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await apiClient.delete(`/admin/categories/${categoryId}`);
              Alert.alert("Success", "Category deleted successfully.");
              fetchCategories(); // Refresh the list
            } catch (error) {
              console.error("Failed to delete category:", error);
              Alert.alert("Error", "Could not delete category.");
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
      <Button title="Add New Category" onPress={() => router.push('/admin/category-form')} />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
            <View style={styles.buttons}>
              <Button title="Edit" onPress={() => router.push(`/admin/category-form?id=${item.id}`)} />
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
  item: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  info: { flex: 1 },
  name: { fontWeight: 'bold' },
  buttons: { flexDirection: 'row', gap: 5 },
});