// // // (tabs)/categories.tsx
// // import React from 'react';
// // import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// // import { Link } from 'expo-router';
// // import { CATEGORIES } from '../lib/mockData';

// // export default function CategoriesScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <FlatList
// //         data={CATEGORIES}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <Link href={`/categories/${item.id}`} asChild>
// //             <TouchableOpacity style={styles.item}>
// //               <Text style={styles.itemText}>{item.name}</Text>
// //             </TouchableOpacity>
// //           </Link>
// //         )}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, paddingTop: 10 },
// //   item: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' },
// //   itemText: { fontSize: 18 },
// // });
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
// import { Link } from 'expo-router';
// import apiClient from '../../lib/api/apiClient';
// import { Category } from '../../lib/types';

// export default function CategoriesScreen() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await apiClient.get<Category[]>('/categories');
//         setCategories(response.data);
//       } catch (err) {
//         setError('Failed to load categories.');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCategories();
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" style={styles.centered} />;
//   }

//   if (error) {
//     return <Text style={styles.errorText}>{error}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={categories}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           // We navigate using the category name, as the backend endpoint expects it.
//           <Link href={`/categories/${item.name}`} asChild>
//             <TouchableOpacity style={styles.item}>
//               <Text style={styles.itemText}>{item.name}</Text>
//             </TouchableOpacity>
//           </Link>
//         )}
//         ListEmptyComponent={<Text style={styles.centered}>No categories found.</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, paddingTop: 10, backgroundColor: '#fff' },
//   item: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
//   itemText: { fontSize: 18 },
//   centered: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
//   errorText: { color: 'red', textAlign: 'center', marginTop: 50 },
// });
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import apiClient from '../lib/api/apiClient'; // Corrected path
import { Category } from '../lib/types'; // Corrected path

export default function CategoriesScreen() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get<Category[]>('/categories');
        setCategories(response.data);
      } catch (err) {
        setError('Failed to load categories.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/categories/${item.name}`} asChild>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          </Link>
        )}
        ListEmptyComponent={<Text style={styles.centered}>No categories found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10, backgroundColor: '#fff' },
  item: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  itemText: { fontSize: 18 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
  errorText: { color: 'red', textAlign: 'center', marginTop: 50 },
});