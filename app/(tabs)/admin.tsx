// // mobile/app/(tabs)/admin.tsx
// import React from 'react';
// import { View, Text, StyleSheet, Button, Alert } from 'react-native';
// import apiClient from '../lib/api/apiClient';
// import { useRouter } from 'expo-router'; // Import useRouter
// export default function AdminScreen() {
// const router = useRouter(); // Initialize router
//   const testAdminEndpoint = async () => {
//     try {
//       const response = await apiClient.get('/admin/test');
//       Alert.alert('Success', response.data);
//     } catch (error) {
//       Alert.alert('Error', 'Could not access admin endpoint.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Admin Dashboard</Text>
//       <View style={styles.buttonContainer}>
//         <Button title="Manage Products" onPress={() => Alert.alert('TODO', 'Navigate to product management screen.')} />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button title="View All Orders" onPress={() => Alert.alert('TODO', router.push('/admin/orders'))} />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button title="Test Admin Access" onPress={testAdminEndpoint} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     marginBottom: 10,
//   }
// });
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import apiClient from '../lib/api/apiClient';
import { useRouter } from 'expo-router';

export default function AdminScreen() {
  const router = useRouter();

  const testAdminEndpoint = async () => {
    try {
      const response = await apiClient.get('/admin/test');
      Alert.alert('Success', response.data);
    } catch (error) {
      Alert.alert('Error', 'Could not access admin endpoint.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Button title="Manage Products" onPress={() => router.push('/admin/manage-products')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Manage Categories" onPress={() => router.push('/admin/manage-categories')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="View All Orders" onPress={() => router.push('/admin/orders')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Test Admin Access" onPress={testAdminEndpoint} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  }
});