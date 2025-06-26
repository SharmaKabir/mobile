// // import React, { useState, useEffect } from 'react';
// // import { View, TextInput, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
// // import apiClient from '../lib/api/apiClient';
// // import { Product } from '../lib/types';
// // import ProductCard from '../components/ProductCard';

// // // This is a custom hook for "debouncing". It prevents API calls on every single keystroke.
// // // Instead, it waits until the user has stopped typing for a moment.
// // const useDebounce = (value: string, delay: number) => {
// //   const [debouncedValue, setDebouncedValue] = useState(value);
// //   useEffect(() => {
// //     const handler = setTimeout(() => {
// //       setDebouncedValue(value);
// //     }, delay);
// //     return () => {
// //       clearTimeout(handler);
// //     };
// //   }, [value, delay]);
// //   return debouncedValue;
// // };

// // export default function SearchScreen() {
// //   const [query, setQuery] = useState('');
// //   const [results, setResults] = useState<Product[]>([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [hasSearched, setHasSearched] = useState(false);

// //   const debouncedQuery = useDebounce(query, 500); // Wait 500ms after user stops typing

// //   useEffect(() => {
// //     if (debouncedQuery.trim() === '') {
// //       setResults([]);
// //       setHasSearched(false);
// //       return;
// //     }

// //     const performSearch = async () => {
// //       console.log(`Searching for: ${debouncedQuery}`);
// //       setIsLoading(true);
// //       setHasSearched(true);
// //       try {
// //         const response = await apiClient.get('/products/search', {
// //           params: { q: debouncedQuery },
// //         });
// //         setResults(response.data);
// //       } catch (error) {
// //         console.error("Search failed:", error);
// //         setResults([]); // Clear results on error
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     performSearch();
// //   }, [debouncedQuery]);

// //   const renderContent = () => {
// //     if (isLoading) {
// //       return <ActivityIndicator size="large" style={styles.centered} />;
// //     }
// //     if (hasSearched && results.length === 0) {
// //       return <Text style={styles.infoText}>No results found for "{query}"</Text>;
// //     }
// //     if (!hasSearched) {
// //       return <Text style={styles.infoText}>Start typing to search for products...</Text>;
// //     }
// //     return (
// //       <FlatList
// //         data={results}
// //         renderItem={({ item }) => <ProductCard product={item} />}
// //         keyExtractor={(item) => item.id.toString()}
// //         numColumns={2}
// //         contentContainerStyle={styles.list}
// //       />
// //     );
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <TextInput
// //         style={styles.searchInput}
// //         placeholder="Search for products..."
// //         value={query}
// //         onChangeText={setQuery}
// //         clearButtonMode="always"
// //       />
// //       {renderContent()}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //   },
// //   searchInput: {
// //     height: 50,
// //     backgroundColor: 'white',
// //     paddingHorizontal: 20,
// //     margin: 16,
// //     borderRadius: 25,
// //     fontSize: 16,
// //     borderWidth: 1,
// //     borderColor: '#e0e0e0',
// //   },
// //   list: {
// //     paddingHorizontal: 8,
// //   },
// //   centered: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   infoText: {
// //     textAlign: 'center',
// //     marginTop: 50,
// //     fontSize: 16,
// //     color: 'gray',
// //   },
// // });

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
// import { useAuth } from '../lib/AuthContext';
// import apiClient from '../lib/api/apiClient';
// import { useRouter } from 'expo-router';

// export default function ProfileScreen() {
//   const { logout, user, isAuthenticated } = useAuth();
//   const router = useRouter();

//   const [orders, setOrders] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleLogout = async () => {
//     await logout();
//   };

//   useEffect(() => {
//     // Only fetch orders if the user is authenticated.
//     if (isAuthenticated) {
//       const fetchOrders = async () => {
//         setLoading(true);
//         try {
//           const response = await apiClient.get('/orders/my-orders');
//           setOrders(response.data);
//         } catch (error) {
//           console.error("Failed to fetch orders:", error);
//           setOrders([]); // Clear orders on error
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchOrders();
//     } else {
//       // If user is not authenticated, ensure orders list is empty.
//       setOrders([]);
//     }
//   }, [isAuthenticated]); // This effect re-runs when authentication state changes.

//   // Render a view for logged-out users
//   if (!isAuthenticated) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>My Profile</Text>
//         <Text style={styles.text}>Log in to view your profile and past orders.</Text>
//         <View style={styles.authButtons}>
//           <Button title="Login" onPress={() => router.push('/login')} />
//           <Button title="Sign Up" onPress={() => router.push('/signup')} color="#555" />
//         </View>
//       </View>
//     );
//   }

//   // Render the view for logged-in users
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Welcome!</Text>
//         <Button title="Logout" onPress={handleLogout} color="#ff3b30" />
//       </View>
//       <Text style={styles.text}>Logged in as: {user?.email}</Text>
      
//       <Text style={styles.ordersTitle}>Past Orders</Text>
//       {loading ? (
//         <ActivityIndicator size="large" />
//       ) : orders.length === 0 ? (
//         <Text style={styles.noOrders}>You have no past orders.</Text>
//       ) : (
//         <FlatList
//           data={orders}
//           keyExtractor={order => order.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.orderCard}>
//               <Text style={styles.orderDate}>
//                 {item.orderDate ? new Date(item.orderDate).toLocaleString() : 'No date'}
//               </Text>
//               <Text>Total: ${item.totalAmount.toFixed(2)}</Text>
//               <Text>Shipping: {item.shippingFullName}, {item.shippingAddressLine1}</Text>
//               <Text>Items:</Text>
//               {item.orderItems && item.orderItems.map((orderItem: any) => (
//                 <Text key={orderItem.id}>
//                   - {orderItem.product?.name || 'Unknown'} x {orderItem.quantity}
//                 </Text>
//               ))}
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   title: { fontSize: 24, fontWeight: 'bold' },
//   text: { fontSize: 16, marginBottom: 16, color: 'gray' },
//   authButtons: {
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   ordersTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 },
//   noOrders: { color: 'gray', fontStyle: 'italic', marginTop: 16, textAlign: 'center' },
//   orderCard: {
//     backgroundColor: '#f5f5f5',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 12,
//   },
//   orderDate: { fontWeight: 'bold', marginBottom: 4 },
// });
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
      setIsLoading(true);
      setHasSearched(true);
      try {
        const response = await apiClient.get('/products/search', {
          params: { query: debouncedQuery },
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
    if (!hasSearched && query.trim() === '') {
      return <Text style={styles.infoText}>Start typing to search for products...</Text>;
    }
    return (
      <FlatList
        data={results}
        renderItem={({ item }) => <ProductCard product={item} style={{ flex: 1 }}/>}
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