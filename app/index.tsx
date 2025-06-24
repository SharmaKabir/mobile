// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { router } from 'expo-router';

// const products = [
//   { id: '1', name: 'Product 1', price: '$10' },
//   { id: '2', name: 'Product 2', price: '$20' },
// ];

// export default function ProductFeed() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Product Feed</Text>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.product}
//             onPress={() => router.push(`/products/${item.id}`)}
//           >
//             <Text>{item.name}</Text>
//             <Text>{item.price}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
//   product: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
// });
import { Redirect } from 'expo-router';

export default function StartPage() {
  // This component will never be visible to the user.
  // It acts as a definitive entry point for the web app.
  // It immediately redirects to your main (tabs) layout.
  // From there, your existing logic in _layout.tsx will correctly
  // handle redirecting unauthenticated users to the login screen.
  return <Redirect href="/(tabs)" />;
}