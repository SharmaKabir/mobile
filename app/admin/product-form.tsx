// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, StyleSheet, Button, Alert, ScrollView, ActivityIndicator } from 'react-native';
// // import { useLocalSearchParams, useRouter } from 'expo-router';
// // import apiClient from '../lib/api/apiClient';
// // import { Product } from '../lib/types';

// // export default function ProductFormScreen() {
// //   const router = useRouter();
// //   const { id } = useLocalSearchParams<{ id?: string }>();
// //   const isEditing = !!id;

// //   const [name, setName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [imageUrl, setImageUrl] = useState('');
// //   const [loading, setLoading] = useState(isEditing);
// //   const [submitting, setSubmitting] = useState(false);

// //   useEffect(() => {
// //     if (isEditing) {
// //       const fetchProduct = async () => {
// //         try {
// //           const response = await apiClient.get<Product>(`/products/${id}`);
// //           const product = response.data;
// //           setName(product.name);
// //           setDescription(product.description);
// //           setPrice(product.price.toString());
// //           setImageUrl(product.imageUrl);
// //         } catch (error) {
// //           Alert.alert("Error", "Failed to load product data.");
// //         } finally {
// //           setLoading(false);
// //         }
// //       };
// //       fetchProduct();
// //     }
// //   }, [id, isEditing]);

// //   const handleSubmit = async () => {
// //     if (!name || !price || !imageUrl) {
// //       Alert.alert("Validation Error", "Please fill in all required fields.");
// //       return;
// //     }
// //     setSubmitting(true);
// //     const productData = {
// //       name,
// //       description,
// //       price: parseFloat(price),
// //       imageUrl,
// //     };

// //     try {
// //       if (isEditing) {
// //         await apiClient.put(`/admin/products/${id}`, productData);
// //         Alert.alert("Success", "Product updated successfully.");
// //       } else {
// //         await apiClient.post('/admin/products', productData);
// //         Alert.alert("Success", "Product added successfully.");
// //       }
// //       router.back();
// //     } catch (error) {
// //       console.error("Failed to save product:", error);
// //       Alert.alert("Error", "Could not save product.");
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   if (loading) {
// //     return <ActivityIndicator size="large" style={styles.loader} />;
// //   }

// //   return (
// //     <ScrollView style={styles.container}>
// //       <Text style={styles.label}>Product Name</Text>
// //       <TextInput style={styles.input} value={name} onChangeText={setName} />

// //       <Text style={styles.label}>Description</Text>
// //       <TextInput style={styles.input} value={description} onChangeText={setDescription} multiline />

// //       <Text style={styles.label}>Price</Text>
// //       <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />

// //       <Text style={styles.label}>Image URL</Text>
// //       <TextInput style={styles.input} value={imageUrl} onChangeText={setImageUrl} />

// //       <Button title={submitting ? "Saving..." : "Save Product"} onPress={handleSubmit} disabled={submitting} />
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 20 },
// //   loader: { flex: 1, justifyContent: 'center' },
// //   label: { fontSize: 16, marginBottom: 5 },
// //   input: {
// //     backgroundColor: 'white',
// //     padding: 10,
// //     borderRadius: 5,
// //     marginBottom: 15,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //   },
// // });


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet, Button, Alert, ActivityIndicator, ScrollView } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import apiClient from '../lib/api/apiClient';
// import { Product, Category } from '../lib/types';
// import { Picker } from '@react-native-picker/picker';

// export default function ProductFormScreen() {
//   const router = useRouter();
//   const { id } = useLocalSearchParams<{ id?: string }>();
//   const isEditing = !!id;

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       try {
//         // Fetch all available categories for the dropdown
//         const categoriesResponse = await apiClient.get<Category[]>('/categories');
//         setCategories(categoriesResponse.data);

//         // If we are editing an existing product, fetch its data
//         if (isEditing) {
//           const productResponse = await apiClient.get<Product>(`/products/${id}`);
//           const product = productResponse.data;
//           setName(product.name);
//           setDescription(product.description);
//           setPrice(product.price.toString());
//           setImageUrl(product.imageUrl);
//           // Set the initial value for the category picker
//           if (product.category) {
//             setSelectedCategoryId(product.category.id);
//           }
//         }
//       } catch (error) {
//         Alert.alert("Error", "Failed to load initial data.");
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchInitialData();
//   }, [id, isEditing]);

//   const handleSubmit = async () => {
//     if (!name || !price || !selectedCategoryId) {
//       Alert.alert("Validation Error", "Please fill in all fields, including category.");
//       return;
//     }
//     setSubmitting(true);

//     const productData = {
//       name,
//       description,
//       price: parseFloat(price),
//       imageUrl,
//       categoryId: selectedCategoryId,
//     };

//     try {
//       if (isEditing) {
//         await apiClient.put(`/admin/products/${id}`, productData);
//         Alert.alert("Success", "Product updated successfully.");
//       } else {
//         await apiClient.post('/admin/products', productData);
//         Alert.alert("Success", "Product created successfully.");
//       }
//       router.back(); // Go back to the previous screen
//     } catch (error) {
//       console.error("Failed to submit product:", error);
//       Alert.alert("Error", "Could not save the product.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" style={styles.loader} />;
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.label}>Product Name</Text>
//       <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="e.g., Wireless Headphones" />

//       <Text style={styles.label}>Description</Text>
//       <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Product details" multiline />

//       <Text style={styles.label}>Price</Text>
//       <TextInput style={styles.input} value={price} onChangeText={setPrice} placeholder="e.g., 99.99" keyboardType="numeric" />

//       <Text style={styles.label}>Image URL</Text>
//       <TextInput style={styles.input} value={imageUrl} onChangeText={setImageUrl} placeholder="https://example.com/image.png" />

//       <Text style={styles.label}>Category</Text>
//       <View style={styles.pickerContainer}>
//         <Picker
//           selectedValue={selectedCategoryId}
//           onValueChange={(itemValue) => setSelectedCategoryId(itemValue)}
//         >
//           <Picker.Item label="-- Select a Category --" value={null} />
//           {categories.map((cat) => (
//             <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
//           ))}
//         </Picker>
//       </View>

//       <Button title={submitting ? "Saving..." : (isEditing ? "Update Product" : "Create Product")} onPress={handleSubmit} disabled={submitting} />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
//   loader: { flex: 1, justifyContent: 'center' },
//   label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 20,
//   },
// });
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import apiClient from '../lib/api/apiClient';
import { Product, Category } from '../lib/types';
import { Picker } from '@react-native-picker/picker';

export default function ProductFormScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const isEditing = !!id;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [stockQuantity, setStockQuantity] = useState('0'); // Add state for stock
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const categoriesResponse = await apiClient.get<Category[]>('/categories');
        setCategories(categoriesResponse.data);

        if (isEditing) {
          const productResponse = await apiClient.get<Product>(`/products/${id}`);
          const product = productResponse.data;
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price.toString());
          setImageUrl(product.imageUrl);
          setStockQuantity(product.stockQuantity.toString()); // Set stock state
          if (product.category) {
            setSelectedCategoryId(product.category.id);
          }
        }
      } catch (error) {
        Alert.alert("Error", "Failed to load initial data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [id, isEditing]);

  const handleSubmit = async () => {
    if (!name || !price || !selectedCategoryId || !stockQuantity) {
      Alert.alert("Validation Error", "Please fill in all fields, including category and stock.");
      return;
    }
    setSubmitting(true);

    const productData = {
      name,
      description,
      price: parseFloat(price),
      imageUrl,
      categoryId: selectedCategoryId,
      stockQuantity: parseInt(stockQuantity, 10), // Add stock to payload
    };

    try {
      if (isEditing) {
        await apiClient.put(`/admin/products/${id}`, productData);
        Alert.alert("Success", "Product updated successfully.");
      } else {
        await apiClient.post('/admin/products', productData);
        Alert.alert("Success", "Product created successfully.");
      }
      router.back();
    } catch (error) {
      console.error("Failed to submit product:", error);
      Alert.alert("Error", "Could not save product.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Product Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter product name" />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Enter description" multiline />

      <Text style={styles.label}>Price</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} placeholder="Enter price" keyboardType="numeric" />

      <Text style={styles.label}>Image URL</Text>
      <TextInput style={styles.input} value={imageUrl} onChangeText={setImageUrl} placeholder="Enter image URL" />

      <Text style={styles.label}>Stock Quantity</Text>
      <TextInput style={styles.input} value={stockQuantity} onChangeText={setStockQuantity} placeholder="Enter stock quantity" keyboardType="numeric" />

      <Text style={styles.label}>Category</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategoryId}
          onValueChange={(itemValue) => setSelectedCategoryId(itemValue)}
        >
          <Picker.Item label="-- Select a Category --" value={null} />
          {categories.map(category => (
            <Picker.Item key={category.id} label={category.name} value={category.id} />
          ))}
        </Picker>
      </View>

      <Button title={submitting ? 'Saving...' : (isEditing ? 'Update Product' : 'Create Product')} onPress={handleSubmit} disabled={submitting} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
});