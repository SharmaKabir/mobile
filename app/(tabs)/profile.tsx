// // import React from 'react';
// // import { View, Text, StyleSheet, Button } from 'react-native';
// // import { useAuth } from '../lib/AuthContext';
// // import { useCart } from '../lib/CartContext';
// // import { Alert, Platform, ToastAndroid } from 'react-native';
// // export default function ProfileScreen() {
// //   const { logout } = useAuth();
// //   const { clearCart } = useCart();

// //   const handleLogout = async () => {
// //     // First clear the cart
// //     clearCart();
// //     // Then log out - this order is important
// //     await logout();
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Profile</Text>
// //       <Text style={styles.text}>Welcome to your profile!</Text>
// //       <View style={styles.buttonContainer}>
// //         <Button title="Logout" onPress={handleLogout} color="#ff3b30" />
// //         <Button title="Test Alert" onPress={() => Alert.alert('Test', 'This is a test alert!')} />
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
// //   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
// //   text: { fontSize: 16, marginBottom: 24 },
// //   buttonContainer: {
// //     width: '80%',
// //   }
// // });
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
// import { useAuth } from '../lib/AuthContext';
// import { useCart } from '../lib/CartContext';
// import apiClient from '../lib/api/apiClient';

// export default function ProfileScreen() {
//   const { logout } = useAuth();
//   const { clearCart } = useCart();

//   const [orders, setOrders] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const handleLogout = async () => {
//     clearCart();
//     await logout();
//   };

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         setLoading(true);
//         const response = await apiClient.get('/orders/my-orders');
//         setOrders(response.data);
//       } catch (error) {
//         setOrders([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Profile</Text>
//       <Text style={styles.text}>Welcome to your profile!</Text>
//       <View style={styles.buttonContainer}>
//         <Button title="Logout" onPress={handleLogout} color="#ff3b30" />
//       </View>
//       <Text style={styles.ordersTitle}>Past Orders</Text>
//       {loading ? (
//         <ActivityIndicator size="large" />
//       ) : orders.length === 0 ? (
//         <Text style={styles.noOrders}>No past orders found.</Text>
//       ) : (
//         <FlatList
//           data={orders}
//           keyExtractor={order => order.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.orderCard}>
//               <Text style={styles.orderDate}>
//                 {item.orderDate ? new Date(item.orderDate).toLocaleString() : 'No date'}
//               </Text>
//               <Text>Total: ${item.totalAmount}</Text>
//               <Text>Shipping: {item.shippingFullName}, {item.shippingAddressLine1}, {item.shippingCity}</Text>
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
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
//   text: { fontSize: 16, marginBottom: 16 },
//   buttonContainer: { width: '80%', marginBottom: 24 },
//   ordersTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
//   noOrders: { color: 'gray', fontStyle: 'italic', marginTop: 16 },
//   orderCard: {
//     backgroundColor: '#f5f5f5',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 12,
//   },
//   orderDate: { fontWeight: 'bold', marginBottom: 4 },
// });
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
import { useAuth } from '../lib/AuthContext';
import { useCart } from '../lib/CartContext';
import apiClient from '../lib/api/apiClient';
import { useFocusEffect } from 'expo-router';

export default function ProfileScreen() {
  const { logout } = useAuth();
  const { clearCart } = useCart();

  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    clearCart();
    await logout();
  };

  // Refetch orders every time the screen is focused
  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const fetchOrders = async () => {
        try {
          setLoading(true);
          const response = await apiClient.get('/orders/my-orders');
          if (isActive) setOrders(response.data);
        } catch (error) {
          if (isActive) setOrders([]);
        } finally {
          if (isActive) setLoading(false);
        }
      };
      fetchOrders();
      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>Welcome to your profile!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} color="#ff3b30" />
      </View>
      <Text style={styles.ordersTitle}>Past Orders</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : orders.length === 0 ? (
        <Text style={styles.noOrders}>No past orders found.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={order => order.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.orderCard}>
              <Text style={styles.orderDate}>
                {item.orderDate ? new Date(item.orderDate).toLocaleString() : 'No date'}
              </Text>
              <Text>Total: ${item.totalAmount}</Text>
              <Text>Shipping: {item.shippingAddress}</Text>
              <Text>Items:</Text>
              {item.orderItems && item.orderItems.map((orderItem: any) => (
                <Text key={orderItem.id}>
                  - {orderItem.product?.name || 'Unknown'} x {orderItem.quantity}
                </Text>
              ))}
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  text: { fontSize: 16, marginBottom: 16 },
  buttonContainer: { width: '80%', marginBottom: 24 },
  ordersTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  noOrders: { color: 'gray', fontStyle: 'italic', marginTop: 16 },
  orderCard: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  orderDate: { fontWeight: 'bold', marginBottom: 4 },
});