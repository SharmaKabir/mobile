// // // // // // (tabs)/index.tsx
// // // // // import React from 'react';
// // // // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
// // // // // import { Link } from 'expo-router';
// // // // // import { PRODUCTS } from '../lib/mockData';
// // // // // import { Product } from '../lib/types';

// // // // // // This would be a separate component in a real app (e.g., src/components/ProductCard.tsx)
// // // // // const ProductCard = ({ item }: { item: Product }) => (
// // // // //   <Link href={`/products/${item.id}`} asChild>
// // // // //     <TouchableOpacity style={styles.card}>
// // // // //       <Image source={{ uri: item.imageUrl }} style={styles.image} />
// // // // //       <Text style={styles.productName}>{item.name}</Text>
// // // // //       <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
// // // // //     </TouchableOpacity>
// // // // //   </Link>
// // // // // );

// // // // // export default function ShopScreen() {
// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <FlatList
// // // // //         data={PRODUCTS}
// // // // //         renderItem={({ item }) => <ProductCard item={item} />}
// // // // //         keyExtractor={(item) => item.id}
// // // // //         numColumns={2}
// // // // //         ListHeaderComponent={<Text style={styles.header}>Featured Products</Text>}
// // // // //       />
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: { flex: 1, backgroundColor: '#f5f5f5' },
// // // // //   header: { fontSize: 24, fontWeight: 'bold', margin: 16 },
// // // // //   card: { flex: 1, margin: 8, backgroundColor: 'white', padding: 10, borderRadius: 8, alignItems: 'center' },
// // // // //   image: { width: 150, height: 150, marginBottom: 10 },
// // // // //   productName: { fontSize: 16, fontWeight: '600' },
// // // // //   productPrice: { fontSize: 14, color: 'green', marginTop: 4 },
// // // // // });

// // // // import React, { useEffect, useState } from 'react';
// // // // import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
// // // // import apiClient from '../lib/api/apiClient';
// // // // import ProductCard from '../components/ProductCard'; // We will create this reusable component next
// // // // import { Product } from '../lib/types';

// // // // export default function ShopScreen() {
// // // //   const [products, setProducts] = useState<Product[]>([]);
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [error, setError] = useState<string | null>(null);

// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         setIsLoading(true);
// // // //         const response = await apiClient.get('/products');
// // // //         setProducts(response.data);
// // // //         setError(null);
// // // //       } catch (e) {
// // // //         setError('Failed to fetch products. Please try again later.');
// // // //         console.error(e);
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     };

// // // //     fetchProducts();
// // // //   }, []);

// // // //   if (isLoading) {
// // // //     return (
// // // //       <View style={styles.center}>
// // // //         <ActivityIndicator size="large" />
// // // //       </View>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <View style={styles.center}>
// // // //         <Text style={styles.errorText}>{error}</Text>
// // // //       </View>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <FlatList
// // // //       data={products}
// // // //       renderItem={({ item }) => <ProductCard product={item} />}
// // // //       keyExtractor={(item) => item.id.toString()}
// // // //       numColumns={2}
// // // //       contentContainerStyle={styles.list}
// // // //       ListHeaderComponent={<Text style={styles.header}>Featured Products</Text>}
// // // //     />
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   list: {
// // // //     paddingHorizontal: 8,
// // // //   },
// // // //   center: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   errorText: {
// // // //     color: 'red',
// // // //     fontSize: 16,
// // // //   },
// // // //   header: {
// // // //     fontSize: 24,
// // // //     fontWeight: 'bold',
// // // //     margin: 16,
// // // //     marginLeft: 8,
// // // //   },
// // // // });

// // // import React from 'react';
// // // import { View, Text, StyleSheet, FlatList, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
// // // import useSWR from 'swr';
// // // import { useRouter } from 'expo-router';
// // // import apiClient from '../lib/api/apiClient';
// // // import { Product, Category } from '../lib/types';
// // // import ProductCard from '../components/ProductCard';

// // // const fetcher = (url: string) => apiClient.get(url).then(res => res.data);

// // // // A small component for the header of each category section
// // // const CategorySectionHeader = ({ title, onSeeAllPress }: { title: string, onSeeAllPress: () => void }) => (
// // //   <View style={styles.sectionHeader}>
// // //     <Text style={styles.sectionTitle}>{title}</Text>
// // //     <TouchableOpacity onPress={onSeeAllPress}>
// // //       <Text style={styles.seeAllText}>View All</Text>
// // //     </TouchableOpacity>
// // //   </View>
// // // );

// // // export default function ShopScreen() {
// // //   const router = useRouter();

// // //   // Fetch all products and all categories simultaneously
// // //   const { data: products, error: productsError, isLoading: productsLoading } = useSWR<Product[]>('/products', fetcher);
// // //   const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useSWR<Category[]>('/categories', fetcher);

// // //   const isLoading = productsLoading || categoriesLoading;
// // //   const error = productsError || categoriesError;

// // //   if (isLoading) {
// // //     return <ActivityIndicator size="large" style={styles.centered} />;
// // //   }

// // //   if (error) {
// // //     return <Text style={styles.errorText}>Failed to load shop data.</Text>;
// // //   }

// // //   // --- Data Processing ---
// // //   // For "New Arrivals", sort products by ID descending (newest first) and take the top 10
// // //   const newArrivals = products ? [...products].sort((a, b) => b.id - a.id).slice(0, 10) : [];

// // //   // Group products by their category for the sections below
// // //   const productsByCategory = categories
// // //     ?.map(category => ({
// // //       ...category,
// // //       // Find all products for this category and take the first 10 for the preview
// // //       products: products?.filter(p => p.category.id === category.id).slice(0, 10) || [],
// // //     }))
// // //     // Only show sections for categories that actually have products
// // //     .filter(category => category.products.length > 0);

// // //   return (
// // //     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
// // //       {/* --- New Arrivals Section --- */}
// // //       <View style={styles.section}>
// // //         <Text style={styles.mainHeader}>New Arrivals</Text>
// // //         <FlatList
// // //           data={newArrivals}
// // //           renderItem={({ item }) => <ProductCard product={item} style={styles.horizontalCard} />}
// // //           keyExtractor={(item) => item.id.toString()}
// // //           horizontal
// // //           showsHorizontalScrollIndicator={false}
// // //           contentContainerStyle={styles.horizontalList}
// // //         />
// // //       </View>

// // //       {/* --- Products by Category Sections --- */}
// // //       {productsByCategory?.map(category => (
// // //         <View style={styles.section} key={category.id}>
// // //           <CategorySectionHeader 
// // //             title={category.name} 
// // //             onSeeAllPress={() => router.push(`/categories/${category.name}`)}
// // //           />
// // //           <FlatList
// // //             data={category.products}
// // //             renderItem={({ item }) => <ProductCard product={item} style={styles.horizontalCard} />}
// // //             keyExtractor={(item) => item.id.toString()}
// // //             horizontal
// // //             showsHorizontalScrollIndicator={false}
// // //             contentContainerStyle={styles.horizontalList}
// // //           />
// // //         </View>
// // //       ))}
// // //     </ScrollView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#f5f5f5',
// // //   },
// // //   centered: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   errorText: {
// // //     textAlign: 'center',
// // //     marginTop: 50,
// // //     color: 'red',
// // //   },
// // //   section: {
// // //     backgroundColor: 'white',
// // //     paddingVertical: 16,
// // //     marginBottom: 12,
// // //   },
// // //   mainHeader: {
// // //     fontSize: 22,
// // //     fontWeight: 'bold',
// // //     marginHorizontal: 16,
// // //     marginBottom: 12,
// // //   },
// // //   sectionHeader: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginHorizontal: 16,
// // //     marginBottom: 4,
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //   },
// // //   seeAllText: {
// // //     fontSize: 14,
// // //     color: '#E31937', // Alizarin color for the link
// // //     fontWeight: '600',
// // //   },
// // //   horizontalList: {
// // //     paddingHorizontal: 8,
// // //   },
// // //   horizontalCard: {
// // //     flex: 0, // Remove flex so width property works correctly
// // //     width: 160, // A fixed width for cards in the horizontal scroll
// // //     marginHorizontal: 8,
// // //   },
// // // });
// // import React from 'react';
// // import { View, Text, StyleSheet, FlatList, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
// // import useSWR from 'swr';
// // import { useRouter } from 'expo-router';
// // import apiClient from '../lib/api/apiClient';
// // import { Product, Category } from '../lib/types';
// // import ProductCard from '../components/ProductCard';

// // const fetcher = (url: string) => apiClient.get(url).then(res => res.data);

// // // A small component for the header of each category section
// // const CategorySectionHeader = ({ title, onSeeAllPress }: { title: string, onSeeAllPress: () => void }) => (
// //   <View style={styles.sectionHeader}>
// //     <Text style={styles.sectionTitle}>{title}</Text>
// //     <TouchableOpacity onPress={onSeeAllPress}>
// //       <Text style={styles.seeAllText}>View All</Text>
// //     </TouchableOpacity>
// //   </View>
// // );

// // export default function ShopScreen() {
// //   const router = useRouter();

// //   // Fetch all products and all categories simultaneously
// //   const { data: products, error: productsError, isLoading: productsLoading } = useSWR<Product[]>('/products', fetcher);
// //   const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useSWR<Category[]>('/categories', fetcher);

// //   const isLoading = productsLoading || categoriesLoading;
// //   const error = productsError || categoriesError;

// //   if (isLoading) {
// //     return <ActivityIndicator size="large" style={styles.centered} />;
// //   }

// //   if (error) {
// //     return <Text style={styles.errorText}>Failed to load shop data.</Text>;
// //   }

// //   // --- Data Processing ---
// //   // For "New Arrivals", sort products by ID descending (newest first) and take the top 10
// //   const newArrivals = products ? [...products].sort((a, b) => b.id - a.id).slice(0, 10) : [];

// //   // Group products by their category for the sections below
// //   const productsByCategory = categories
// //     ?.map(category => ({
// //       ...category,
// //       // Find all products for this category and take the first 10 for the preview
// //       products: products?.filter(p => p.category.id === category.id).slice(0, 10) || [],
// //     }))
// //     // Only show sections for categories that actually have products
// //     .filter(category => category.products.length > 0);

// //   return (
// //     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
// //       {/* --- New Arrivals Section --- */}
// //       <View style={styles.section}>
// //         <Text style={styles.mainHeader}>New Arrivals</Text>
// //         <FlatList
// //           data={newArrivals}
// //           renderItem={({ item }) => <ProductCard product={item} style={styles.horizontalCard} />}
// //           keyExtractor={(item) => item.id.toString()}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={styles.horizontalList}
// //         />
// //       </View>

// //       {/* --- Products by Category Sections --- */}
// //       {productsByCategory?.map(category => (
// //         <View style={styles.section} key={category.id}>
// //           <CategorySectionHeader 
// //             title={category.name} 
// //             onSeeAllPress={() => router.push(`/categories/${category.name}`)}
// //           />
// //           <FlatList
// //             data={category.products}
// //             renderItem={({ item }) => <ProductCard product={item} style={styles.horizontalCard} />}
// //             keyExtractor={(item) => item.id.toString()}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.horizontalList}
// //           />
// //         </View>
// //       ))}
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //   },
// //   centered: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   errorText: {
// //     textAlign: 'center',
// //     marginTop: 50,
// //     color: 'red',
// //   },
// //   section: {
// //     backgroundColor: 'white',
// //     paddingVertical: 16,
// //     marginBottom: 12,
// //   },
// //   mainHeader: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     marginHorizontal: 16,
// //     marginBottom: 12,
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginHorizontal: 16,
// //     marginBottom: 4,
// //   },
// //   sectionTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// //   seeAllText: {
// //     fontSize: 14,
// //     color: '#E31937', // Alizarin color for the link
// //     fontWeight: '600',
// //   },
// //   horizontalList: {
// //     paddingHorizontal: 8,
// //   },
// //   horizontalCard: {
// //     flex: 0, // Remove flex so width property works correctly
// //     width: 160, // A fixed width for cards in the horizontal scroll
// //     marginHorizontal: 8,
// //   },
// // });

// // import React from 'react';
// // import { View, Text, StyleSheet, FlatList, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
// // import useSWR from 'swr';
// // import { useRouter } from 'expo-router';
// // import apiClient from '../lib/api/apiClient';
// // import { Product, Category } from '../lib/types';
// // import ProductCard from '../components/ProductCard';

// // const fetcher = (url: string) => apiClient.get(url).then(res => res.data);

// // // A small component for the header of each category section
// // const CategorySectionHeader = ({ title, onSeeAllPress }: { title: string, onSeeAllPress: () => void }) => (
// //   <View style={styles.sectionHeader}>
// //     <Text style={styles.sectionTitle}>{title}</Text>
// //     <TouchableOpacity onPress={onSeeAllPress}>
// //       <Text style={styles.seeAllText}>View All</Text>
// //     </TouchableOpacity>
// //   </View>
// // );

// // export default function ShopScreen() {
// //   const router = useRouter();

// //   // Fetch all products and all categories simultaneously
// //   const { data: products, error: productsError, isLoading: productsLoading } = useSWR<Product[]>('/products', fetcher);
// //   const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useSWR<Category[]>('/categories', fetcher);

// //   const isLoading = productsLoading || categoriesLoading;
// //   const error = productsError || categoriesError;

// //   if (isLoading) {
// //     return <ActivityIndicator size="large" style={styles.centered} />;
// //   }

// //   if (error) {
// //     return <Text style={styles.errorText}>Failed to load shop data.</Text>;
// //   }

// //   // --- Data Processing ---
// //   // For "New Arrivals", sort products by ID descending (newest first) and take the top 10
// //   const newArrivals = products ? [...products].sort((a, b) => b.id - a.id).slice(0, 10) : [];

// //   // Group products by their category for the sections below
// //   const productsByCategory = categories
// //     ?.map(category => ({
// //       ...category,
// //       // Find all products for this category and take the first 10 for the preview
// //       products: products?.filter(p => p.category && p.category.id === category.id).slice(0, 10) || [],
// //     }))
// //     // Only show sections for categories that actually have products
// //     .filter(category => category.products.length > 0);

// //   return (
// //     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
// //       {/* --- New Arrivals Section --- */}
// //       <View style={styles.section}>
// //         <Text style={styles.mainHeader}>New Arrivals</Text>
// //         <FlatList
// //           data={newArrivals}
// //           renderItem={({ item }) => <ProductCard product={item} style={styles.horizontalCard} />}
// //           keyExtractor={(item) => item.id.toString()}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={styles.horizontalList}
// //         />
// //       </View>

// //       {/* --- Products by Category Sections --- */}
// //       {productsByCategory?.map(category => (
// //         <View style={styles.section} key={category.id}>
// //           <CategorySectionHeader 
// //             title={category.name} 
// //             onSeeAllPress={() => router.push(`/categories/${category.name}`)}
// //           />
// //           <FlatList
// //             data={category.products}
// //             renderItem={({ item }) => <ProductCard product={item} style={styles.horizontalCard} />}
// //             keyExtractor={(item) => item.id.toString()}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.horizontalList}
// //           />
// //         </View>
// //       ))}
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //   },
// //   centered: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   errorText: {
// //     textAlign: 'center',
// //     marginTop: 50,
// //     color: 'red',
// //   },
// //   section: {
// //     backgroundColor: 'white',
// //     paddingVertical: 16,
// //     marginBottom: 12,
// //   },
// //   mainHeader: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     marginHorizontal: 16,
// //     marginBottom: 12,
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginHorizontal: 16,
// //     marginBottom: 4,
// //   },
// //   sectionTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// //   seeAllText: {
// //     fontSize: 14,
// //     color: '#E31937',
// //     fontWeight: '600',
// //   },
// //   horizontalList: {
// //     paddingHorizontal: 8,
// //   },
// //   horizontalCard: {
// //     // flex: 0,
// //     width: 160,
// //     marginHorizontal: 8,
// //   },
// // });

// import React from 'react';
// import { View, Text, StyleSheet, FlatList, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
// import useSWR from 'swr';
// import { useRouter } from 'expo-router';
// import apiClient from '../lib/api/apiClient';
// import { Product, Category } from '../lib/types';
// import ProductCard from '../components/ProductCard';

// const fetcher = (url: string) => apiClient.get(url).then(res => res.data);

// // A small component for the header of each category section
// const CategorySectionHeader = ({ title, onSeeAllPress }: { title: string, onSeeAllPress: () => void }) => (
//   <View style={styles.sectionHeader}>
//     <Text style={styles.sectionTitle}>{title}</Text>
//     <TouchableOpacity onPress={onSeeAllPress}>
//       <Text style={styles.seeAllText}>View All</Text>
//     </TouchableOpacity>
//   </View>
// );

// export default function ShopScreen() {
//   const router = useRouter();

//   // Fetch all products and all categories simultaneously
//   const { data: products, error: productsError, isLoading: productsLoading } = useSWR<Product[]>('/products', fetcher);
//   const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useSWR<Category[]>('/categories', fetcher);

//   const isLoading = productsLoading || categoriesLoading;
//   const error = productsError || categoriesError;

//   if (isLoading) {
//     return <ActivityIndicator size="large" style={styles.centered} />;
//   }

//   if (error) {
//     return <Text style={styles.errorText}>Failed to load shop data.</Text>;
//   }

//   // --- Data Processing ---
//   const newArrivals = products ? [...products].sort((a, b) => b.id - a.id).slice(0, 10) : [];

//   const productsByCategory = categories
//     ?.map(category => ({
//       ...category,
//       products: products?.filter(p => p.category && p.category.id === category.id).slice(0, 10) || [],
//     }))
//     .filter(category => category.products.length > 0);

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       {/* --- New Arrivals Section --- */}
//       <View style={styles.section}>
//         <Text style={styles.mainHeader}>New Arrivals</Text>
//         <FlatList
//           data={newArrivals}
//           renderItem={({ item }) => <ProductCard product={item} style={styles.horizontalCard} />}
//           keyExtractor={(item) => item.id.toString()}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.horizontalList}
//         />
//       </View>

//       {/* --- Products by Category Sections --- */}
//       {productsByCategory?.map(category => (
//         <View style={styles.section} key={category.id}>
//           <CategorySectionHeader 
//             title={category.name} 
//             onSeeAllPress={() => router.push(`/categories/${category.name}`)}
//           />
//           <FlatList
//             data={category.products}
//             renderItem={({ item }) => <ProductCard product={item} style={styles.horizontalCard} />}
//             keyExtractor={(item) => item.id.toString()}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.horizontalList}
//           />
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     textAlign: 'center',
//     marginTop: 50,
//     color: 'red',
//   },
//   section: {
//     backgroundColor: 'white',
//     paddingVertical: 16,
//     marginBottom: 12,
//   },
//   mainHeader: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginHorizontal: 16,
//     marginBottom: 12,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginHorizontal: 16,
//     marginBottom: 4,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#E31937',
//     fontWeight: '600',
//   },
//   horizontalList: {
//     paddingHorizontal: 8,
//   },
//   horizontalCard: {
//     width: 160,
//     marginHorizontal: 8,
//   },
// });
import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import useSWR from 'swr';
import { useRouter } from 'expo-router';
import apiClient from '../lib/api/apiClient';
import { Product, Category } from '../lib/types';
import ProductCard from '../components/ProductCard';

const fetcher = (url: string) => apiClient.get(url).then(res => res.data);

export default function ShopScreen() {
  const router = useRouter();

  // Fetch all products and all categories simultaneously
  const { data: products, error: productsError, isLoading: productsLoading } = useSWR<Product[]>('/products', fetcher);
  const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useSWR<Category[]>('/categories', fetcher);

  const isLoading = productsLoading || categoriesLoading;
  const error = productsError || categoriesError;

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (error) {
    return <Text style={styles.errorText}>Failed to load shop data.</Text>;
  }

  // --- Data Processing ---
  const newArrivals = products ? [...products].sort((a, b) => b.id - a.id).slice(0, 10) : [];

  const productsByCategory = categories
    ?.map(category => ({
      ...category,
      products: products?.filter(p => p.category && p.category.id === category.id).slice(0, 10) || [],
    }))
    .filter(category => category.products.length > 0);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* --- New Arrivals Section (remains the same) --- */}
      <View style={styles.section}>
        <View style={styles.headerBar}>
          <Text style={styles.headerBarText}>NEW ARRIVALS</Text>
        </View>
        <FlatList
          data={newArrivals}
          renderItem={({ item }) => <ProductCard product={item} style={styles.horizontalCard} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />
      </View>

      {/* --- NEW: Consolidated Categories Section --- */}
      <View style={styles.section}>
        <View style={styles.headerBar}>
          <Text style={styles.headerBarText}>CATEGORIES</Text>
        </View>
        
        {productsByCategory?.map(category => (
          <View key={category.id} style={styles.subCategoryContainer}>
            {/* Sub-header with left-aligned title and right-aligned link */}
            <View style={styles.subHeader}>
              <Text style={styles.subHeaderText}>{category.name}</Text>
              <TouchableOpacity onPress={() => router.push(`/categories/${category.name}`)}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
            
            {/* Horizontal product list for the sub-category */}
            <FlatList
              data={category.products}
              renderItem={({ item }) => <ProductCard product={item} style={styles.horizontalCard} />}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 50,
    color: 'red',
  },
  section: {
    backgroundColor: 'white',
    paddingBottom: 16,
    marginBottom: 12,
  },
  headerBar: {
    backgroundColor: '#E31937',
    paddingVertical: 12,
    marginTop: 16,
    marginBottom: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Styles for the new category sub-sections
  subCategoryContainer: {
    marginTop: 16,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 14,
    color: '#E31937',
    fontWeight: '600',
  },
  horizontalList: {
    paddingHorizontal: 8,
  },
  horizontalCard: {
    width: 160,
    marginHorizontal: 8,
  },
});