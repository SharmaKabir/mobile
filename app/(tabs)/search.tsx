import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import apiClient from '../lib/api/apiClient';
import { Product } from '../lib/types';
import ProductCard from '../components/ProductCard';

// This is a custom hook for "debouncing". It prevents API calls on every single keystroke.
// Instead, it waits until the user has stopped typing for a moment.
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const debouncedQuery = useDebounce(query, 500); // Wait 500ms after user stops typing

  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const performSearch = async () => {
      console.log(`Searching for: ${debouncedQuery}`);
      setIsLoading(true);
      setHasSearched(true);
      try {
        const response = await apiClient.get('/products/search', {
          params: { q: debouncedQuery },
        });
        setResults(response.data);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]); // Clear results on error
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [debouncedQuery]);

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" style={styles.centered} />;
    }
    if (hasSearched && results.length === 0) {
      return <Text style={styles.infoText}>No results found for "{query}"</Text>;
    }
    if (!hasSearched) {
      return <Text style={styles.infoText}>Start typing to search for products...</Text>;
    }
    return (
      <FlatList
        data={results}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for products..."
        value={query}
        onChangeText={setQuery}
        clearButtonMode="always"
      />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    margin: 16,
    borderRadius: 25,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  list: {
    paddingHorizontal: 8,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: 'gray',
  },
});