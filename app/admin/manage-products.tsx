// // // // import React, { useState, useCallback } from 'react';
// // // // import { View, Text, FlatList, StyleSheet, Button, Alert, ActivityIndicator, Image } from 'react-native';
// // // // import apiClient from '../lib/api/apiClient';
// // // // import { useFocusEffect, useRouter } from 'expo-router';
// // // // import { Product } from '../lib/types';

// // // // export default function ManageProductsScreen() {
// // // //   const [products, setProducts] = useState<Product[]>([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const router = useRouter();

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const response = await apiClient.get('/products');
// // // //       setProducts(response.data);
// // // //     } catch (error) {
// // // //       console.error("Failed to fetch products:", error);
// // // //       Alert.alert("Error", "Could not fetch products.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useFocusEffect(
// // // //     useCallback(() => {
// // // //       setLoading(true);
// // // //       fetchProducts();
// // // //     }, [])
// // // //   );

// // // //   const handleDelete = (productId: number) => {
// // // //     Alert.alert(
// // // //       "Delete Product",
// // // //       "Are you sure you want to delete this product?",
// // // //       [
// // // //         { text: "Cancel", style: "cancel" },
// // // //         {
// // // //           text: "Delete",
// // // //           style: "destructive",
// // // //           onPress: async () => {
// // // //             try {
// // // //               await apiClient.delete(`/admin/products/${productId}`);
// // // //               Alert.alert("Success", "Product deleted successfully.");
// // // //               fetchProducts(); // Refresh the list
// // // //             } catch (error) {
// // // //               console.error("Failed to delete product:", error);
// // // //               Alert.alert("Error", "Could not delete product.");
// // // //             }
// // // //           },
// // // //         },
// // // //       ]
// // // //     );
// // // //   };

// // // //   if (loading) {
// // // //     return <ActivityIndicator size="large" style={styles.loader} />;
// // // //   }

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Button title="Add New Product" onPress={() => router.push('/admin/product-form')} />
// // // //       <FlatList
// // // //         data={products}
// // // //         keyExtractor={(item) => item.id.toString()}
// // // //         renderItem={({ item }) => (
// // // //           <View style={styles.productItem}>
// // // //             <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
// // // //             <View style={styles.productInfo}>
// // // //               <Text style={styles.productName}>{item.name}</Text>
// // // //               <Text>${item.price.toFixed(2)}</Text>
// // // //             </View>
// // // //             <View style={styles.buttons}>
// // // //               <Button title="Edit" onPress={() => router.push(`/admin/product-form?id=${item.id}`)} />
// // // //               <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
// // // //             </View>
// // // //           </View>
// // // //         )}
// // // //       />
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, padding: 10 },
// // // //   loader: { flex: 1, justifyContent: 'center' },
// // // //   productItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
// // // //   productImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
// // // //   productInfo: { flex: 1 },
// // // //   productName: { fontWeight: 'bold' },
// // // //   buttons: { flexDirection: 'row', gap: 5 },
// // // // });
// // // import React, { useState, useCallback } from 'react';
// // // import { View, Text, FlatList, StyleSheet, Button, Alert, ActivityIndicator, Image } from 'react-native';
// // // import apiClient from '../lib/api/apiClient';
// // // import { useFocusEffect, useRouter } from 'expo-router';
// // // import { Product } from '../lib/types';

// // // export default function ManageProductsScreen() {
// // //   const [products, setProducts] = useState<Product[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const router = useRouter();

// // //   const fetchProducts = async () => {
// // //     try {
// // //       const response = await apiClient.get('/products');
// // //       setProducts(response.data);
// // //     } catch (error) {
// // //       console.error("Failed to fetch products:", error);
// // //       Alert.alert("Error", "Could not fetch products.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // This new function will contain the async logic for deleting the product.
// // //   const performDelete = async (productId: number) => {
// // //     try {
// // //       await apiClient.delete(`/admin/products/${productId}`);
// // //       Alert.alert("Success", "Product deleted successfully.");
// // //       fetchProducts(); // Refresh the list
// // //     } catch (error)
// // //     {
// // //       console.error("Failed to delete product:", error);
// // //       Alert.alert("Error", "Could not delete product.");
// // //     }
// // //   };

// // //   useFocusEffect(
// // //     useCallback(() => {
// // //       setLoading(true);
// // //       fetchProducts();
// // //     }, [])
// // //   );

// // //   const handleDelete = (productId: number) => {
// // //     Alert.alert(
// // //       "Delete Product",
// // //       "Are you sure you want to delete this product?",
// // //       [
// // //         { text: "Cancel", style: "cancel" },
// // //         {
// // //           text: "Delete",
// // //           style: "destructive",
// // //           // The onPress handler now calls our new, separate async function.
// // //           onPress: () => performDelete(productId),
// // //         },
// // //       ]
// // //     );
// // //   };

// // //   if (loading) {
// // //     return <ActivityIndicator size="large" style={styles.loader} />;
// // //   }

// // //   return (
// // //     <View style={styles.container}>
// // //       <Button title="Add New Product" onPress={() => router.push('/admin/product-form')} />
// // //       <FlatList
// // //         data={products}
// // //         keyExtractor={(item) => item.id.toString()}
// // //         renderItem={({ item }) => (
// // //           <View style={styles.productItem}>
// // //             <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
// // //             <View style={styles.productInfo}>
// // //               <Text style={styles.productName}>{item.name}</Text>
// // //               <Text>${item.price.toFixed(2)}</Text>
// // //             </View>
// // //             <View style={styles.buttons}>
// // //               <Button title="Edit" onPress={() => router.push(`/admin/product-form?id=${item.id}`)} />
// // //               <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
// // //             </View>
// // //           </View>
// // //         )}
// // //       />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, padding: 10 },
// // //   loader: { flex: 1, justifyContent: 'center' },
// // //   productItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
// // //   productImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
// // //   productInfo: { flex: 1 },
// // //   productName: { fontWeight: 'bold' },
// // //   buttons: { flexDirection: 'row', gap: 5 },
// // // });
// // import React, { useState, useCallback } from 'react';
// // import { View, Text, FlatList, StyleSheet, Button, Alert, ActivityIndicator, Image } from 'react-native';
// // import apiClient from '../lib/api/apiClient';
// // import { useFocusEffect, useRouter } from 'expo-router';
// // import { Product } from '../lib/types';

// // export default function ManageProductsScreen() {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const router = useRouter();

// //   const fetchProducts = async () => {
// //     try {
// //       const response = await apiClient.get('/products');
// //       setProducts(response.data);
// //     } catch (error) {
// //       console.error("Failed to fetch products:", error);
// //       Alert.alert("Error", "Could not fetch products.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const performDelete = async (productId: number) => {
// //     try {
// //       await apiClient.delete(`/admin/products/${productId}`);
// //       Alert.alert("Success", "Product deleted successfully.");
// //       fetchProducts(); // Refresh the list
// //     } catch (error) {
// //       console.error("🔴 FAILED TO DELETE PRODUCT:", error);
// //       Alert.alert("Error", "Could not delete product.");
// //     }
// //   };

// //   useFocusEffect(
// //     useCallback(() => {
// //       setLoading(true);
// //       fetchProducts();
// //     }, [])
// //   );

// //   const handleDelete = (productId: number) => {
// //     Alert.alert(
// //       "Delete Product",
// //       "Are you sure you want to delete this product?",
// //       [
// //         { text: "Cancel", style: "cancel" },
// //         {
// //           text: "Delete",
// //           style: "destructive",
// //           onPress: () => {
// //             // --- DIAGNOSTIC STEP ---
// //             // This log should appear immediately when you press "Delete" in the alert.
// //             console.log(`🅿️ FIRING DELETE for product ID: ${productId}`);
// //             performDelete(productId);
// //           },
// //         },
// //       ]
// //     );
// //   };

// //   if (loading) {
// //     return <ActivityIndicator size="large" style={styles.loader} />;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Button title="Add New Product" onPress={() => router.push('/admin/product-form')} />
// //       <FlatList
// //         data={products}
// //         keyExtractor={(item) => item.id.toString()}
// //         renderItem={({ item }) => (
// //           <View style={styles.productItem}>
// //             <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
// //             <View style={styles.productInfo}>
// //               <Text style={styles.productName}>{item.name}</Text>
// //               <Text>${item.price.toFixed(2)}</Text>
// //             </View>
// //             <View style={styles.buttons}>
// //               <Button title="Edit" onPress={() => router.push(`/admin/product-form?id=${item.id}`)} />
// //               <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
// //             </View>
// //           </View>
// //         )}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 10 },
// //   loader: { flex: 1, justifyContent: 'center' },
// //   productItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
// //   productImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
// //   productInfo: { flex: 1 },
// //   productName: { fontWeight: 'bold' },
// //   buttons: { flexDirection: 'row', gap: 5 },
// // });
// import React, { useState, useCallback } from 'react';
// import { View, Text, FlatList, StyleSheet, Button, Alert, ActivityIndicator, Image } from 'react-native';
// import apiClient from '../lib/api/apiClient';
// import { useFocusEffect, useRouter } from 'expo-router';
// import { Product } from '../lib/types';

// export default function ManageProductsScreen() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   const fetchProducts = async () => {
//     try {
//       const response = await apiClient.get('/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//       Alert.alert("Error", "Could not fetch products.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useFocusEffect(
//     useCallback(() => {
//       setLoading(true);
//       fetchProducts();
//     }, [])
//   );

//   const handleDelete = (productId: number) => {
//     // Log Step 1: This should appear when you press the red "Delete" button in the list.
//     console.log(`[STEP 1] handleDelete called for product ID: ${productId}`);

//     Alert.alert(
//       "Delete Product",
//       "Are you sure you want to delete this product?",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("[INFO] User pressed Cancel."),
//           style: "cancel"
//         },
//         {
//           text: "Delete",
//           style: "destructive",
//           onPress: async () => {
//             // Log Step 2: This should appear when you press "Delete" inside the alert popup.
//             console.log(`[STEP 2] Alert's Delete button pressed for ID: ${productId}`);
//             try {
//               // Log Step 3: This should appear just before the API call is made.
//               console.log(`[STEP 3] Calling API to delete product ID: ${productId}`);
//               await apiClient.delete(`/admin/products/${productId}`);
//               Alert.alert("Success", "Product deleted successfully.");
//               fetchProducts(); // Refresh the list
//             } catch (error) {
//               console.error("🔴 [ERROR] FAILED TO DELETE PRODUCT:", error);
//               Alert.alert("Error", "Could not delete product.");
//             }
//           },
//         },
//       ]
//     );
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" style={styles.loader} />;
//   }

//   return (
//     <View style={styles.container}>
//       <Button title="Add New Product" onPress={() => router.push('/admin/product-form')} />
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.productItem}>
//             <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//             <View style={styles.productInfo}>
//               <Text style={styles.productName}>{item.name}</Text>
//               <Text>${item.price.toFixed(2)}</Text>
//             </View>
//             <View style={styles.buttons}>
//               <Button title="Edit" onPress={() => router.push(`/admin/product-form?id=${item.id}`)} />
//               <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10 },
//   loader: { flex: 1, justifyContent: 'center' },
//   productItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
//   productImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
//   productInfo: { flex: 1 },
//   productName: { fontWeight: 'bold' },
//   buttons: { flexDirection: 'row', gap: 5 },
// });
import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Button, ActivityIndicator, Image, Modal, TouchableOpacity } from 'react-native';
import apiClient from '../lib/api/apiClient';
import { useFocusEffect, useRouter } from 'expo-router';
import { Product } from '../lib/types';

export default function ManageProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // --- NEW: State for our custom modal ---
  const [isModalVisible, setModalVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchProducts();
    }, [])
  );

  // This function now just opens the modal
  const handleDelete = (productId: number) => {
    setProductToDelete(productId);
    setModalVisible(true);
  };

  // This function runs when the user confirms the deletion in our modal
  const confirmDelete = async () => {
    if (productToDelete === null) return;

    try {
      await apiClient.delete(`/admin/products/${productToDelete}`);
      fetchProducts(); // Refresh the list
    } catch (error) {
      console.error("🔴 FAILED TO DELETE PRODUCT:", error);
    } finally {
      // Close the modal and reset the state
      setModalVisible(false);
      setProductToDelete(null);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      {/* --- NEW: Custom Confirmation Modal --- */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Delete Product</Text>
            <Text style={styles.modalMessage}>Are you sure you want to delete this product?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.deleteButton]} onPress={confirmDelete}>
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Button title="Add New Product" onPress={() => router.push('/admin/product-form')} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttons}>
              <Button title="Edit" onPress={() => router.push(`/admin/product-form?id=${item.id}`)} />
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
  productItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  productImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
  productInfo: { flex: 1 },
  productName: { fontWeight: 'bold' },
  buttons: { flexDirection: 'row', gap: 5 },
  // --- Styles for the new custom modal ---
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});