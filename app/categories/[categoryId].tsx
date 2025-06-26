// // // // app/categories/[categoryId].tsx
// // // import React, { useLayoutEffect } from 'react';
// // // import { View, Text, FlatList, StyleSheet } from 'react-native';
// // // import { useLocalSearchParams, useNavigation } from 'expo-router';
// // // import { PRODUCTS, CATEGORIES } from '../lib/mockData';
// // // import { Product } from '../lib/types';
// // // import { Link } from 'expo-router';
// // // import { TouchableOpacity, Image } from 'react-native';

// // // // Reusing the ProductCard from the home screen would be ideal
// // // const ProductCard = ({ item }: { item: Product }) => (
// // //   <Link href={`/products/${item.id}`} asChild>
// // //     <TouchableOpacity style={styles.card}>
// // //       <Image source={{ uri: item.imageUrl }} style={styles.image} />
// // //       <Text style={styles.productName}>{item.name}</Text>
// // //     </TouchableOpacity>
// // //   </Link>
// // // );


// // // export default function CategoryProductsScreen() {
// // //   const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
// // //   const navigation = useNavigation();

// // //   const category = CATEGORIES.find(c => c.id === categoryId);
// // //   const products = PRODUCTS.filter((p) => p.categoryId === categoryId);
  
// // //   // Set the header title dynamically
// // //   useLayoutEffect(() => {
// // //     navigation.setOptions({ title: category ? category.name : 'Category' });
// // //   }, [navigation, category]);

// // //   return (
// // //     <View style={styles.container}>
// // //       <FlatList
// // //         data={products}
// // //         renderItem={({ item }) => <ProductCard item={item} />}
// // //         keyExtractor={(item) => item.id}
// // //         numColumns={2}
// // //         ListEmptyComponent={<Text>No products found in this category.</Text>}
// // //       />
// // //     </View>
// // //   );
// // // }
// // // // You can reuse styles from the home screen
// // // const styles = StyleSheet.create({
// // //     container: { flex: 1, backgroundColor: '#f5f5f5' },
// // //     card: { flex: 1, margin: 8, backgroundColor: 'white', padding: 10, borderRadius: 8, alignItems: 'center' },
// // //     image: { width: 150, height: 150, marginBottom: 10 },
// // //     productName: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
// // // });
// // import React, { useLayoutEffect } from 'react';
// // import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// // import { useLocalSearchParams, useNavigation } from 'expo-router';
// // import useSWR from 'swr';
// // import apiClient from '../../lib/api/apiClient';
// // import { Product } from '../../lib/types';
// // import ProductCard from '../../components/ProductCard';

// // const fetcher = (url: string) => apiClient.get(url).then(res => res.data);

// // export default function CategoryProductsScreen() {
// //   const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
// //   const navigation = useNavigation();

// //   // Use SWR to fetch products for the given category name
// //   const { data: products, error, isLoading } = useSWR<Product[]>(
// //     categoryId ? `/products/category/${categoryId}` : null,
// //     fetcher
// //   );

// //   // Set the header title dynamically based on the category name from the URL
// //   useLayoutEffect(() => {
// //     if (categoryId) {
// //       // Capitalize the first letter for a nicer title
// //       const title = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
// //       navigation.setOptions({ title });
// //     }
// //   }, [navigation, categoryId]);

// //   if (isLoading) {
// //     return <ActivityIndicator size="large" style={styles.centered} />;
// //   }

// //   if (error) {
// //     return <Text style={styles.errorText}>Failed to load products.</Text>;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <FlatList
// //         data={products}
// //         renderItem={({ item }) => <ProductCard product={item} />}
// //         keyExtractor={(item) => item.id.toString()}
// //         numColumns={2}
// //         contentContainerStyle={styles.list}
// //         ListEmptyComponent={<Text style={styles.centered}>No products found in this category.</Text>}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#f5f5f5' },
// //   list: { paddingHorizontal: 8 },
// //   centered: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
// //   errorText: { color: 'red', textAlign: 'center', marginTop: 50 },
// // });
// import React, { useLayoutEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import { useLocalSearchParams, useNavigation } from 'expo-router';
// import useSWR from 'swr';
// import apiClient from '../lib/api/apiClient'; // Corrected path
// import { Product } from '../lib/types'; // Corrected path
// import ProductCard from '../../components/ProductCard'; // This path is different because it's outside the `categories` folder

// const fetcher = (url: string) => apiClient.get(url).then(res => res.data);

// export default function CategoryProductsScreen() {
//   const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
//   const navigation = useNavigation();

//   const { data: products, error, isLoading } = useSWR<Product[]>(
//     categoryId ? `/products/category/${categoryId}` : null,
//     fetcher
//   );

//   useLayoutEffect(() => {
//     if (categoryId) {
//       const title = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
//       navigation.setOptions({ title });
//     }
//   }, [navigation, categoryId]);

//   if (isLoading) {
//     return <ActivityIndicator size="large" style={styles.centered} />;
//   }

//   if (error) {
//     return <Text style={styles.errorText}>Failed to load products.</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={products}
//         renderItem={({ item }) => <ProductCard product={item} />}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={<Text style={styles.centered}>No products found in this category.</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f5f5f5' },
//   list: { paddingHorizontal: 8 },
//   centered: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
//   errorText: { color: 'red', textAlign: 'center', marginTop: 50 },
// });
import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import useSWR from 'swr';
import apiClient from '../lib/api/apiClient';
import { Product } from '../lib/types';
import ProductCard from '../components/ProductCard';

const fetcher = (url: string) => apiClient.get(url).then(res => res.data);

export default function CategoryProductsScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const navigation = useNavigation();

  const { data: products, error, isLoading } = useSWR<Product[]>(
    categoryId ? `/products/category/${categoryId}` : null,
    fetcher
  );

  useLayoutEffect(() => {
    if (categoryId) {
      const title = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
      navigation.setOptions({ title });
    }
  }, [navigation, categoryId]);

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (error) {
    return <Text style={styles.errorText}>Failed to load products.</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} style={{ flex: 1 }} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.centered}>No products found in this category.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  list: { paddingHorizontal: 8 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
  errorText: { color: 'red', textAlign: 'center', marginTop: 50 },
});