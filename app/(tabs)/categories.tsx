// (tabs)/categories.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { CATEGORIES } from '../lib/mockData';

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/categories/${item.id}`} asChild>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10 },
  item: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  itemText: { fontSize: 18 },
});