// // // // // // // // import React from 'react';
// // // // // // // // import { View, Text, StyleSheet, Button } from 'react-native';
// // // // // // // // import { useAuth } from '../lib/AuthContext';
// // // // // // // // import { useCart } from '../lib/CartContext';
// // // // // // // // import { Alert, Platform, ToastAndroid } from 'react-native';
// // // // // // // // export default function ProfileScreen() {
// // // // // // // //   const { logout } = useAuth();
// // // // // // // //   const { clearCart } = useCart();

// // // // // // // //   const handleLogout = async () => {
// // // // // // // //     // First clear the cart
// // // // // // // //     clearCart();
// // // // // // // //     // Then log out - this order is important
// // // // // // // //     await logout();
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <View style={styles.container}>
// // // // // // // //       <Text style={styles.title}>Profile</Text>
// // // // // // // //       <Text style={styles.text}>Welcome to your profile!</Text>
// // // // // // // //       <View style={styles.buttonContainer}>
// // // // // // // //         <Button title="Logout" onPress={handleLogout} color="#ff3b30" />
// // // // // // // //         <Button title="Test Alert" onPress={() => Alert.alert('Test', 'This is a test alert!')} />
// // // // // // // //       </View>
// // // // // // // //     </View>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
// // // // // // // //   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
// // // // // // // //   text: { fontSize: 16, marginBottom: 24 },
// // // // // // // //   buttonContainer: {
// // // // // // // //     width: '80%',
// // // // // // // //   }
// // // // // // // // });
// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
// // // // // // // import { useAuth } from '../lib/AuthContext';
// // // // // // // import { useCart } from '../lib/CartContext';
// // // // // // // import apiClient from '../lib/api/apiClient';

// // // // // // // export default function ProfileScreen() {
// // // // // // //   const { logout } = useAuth();
// // // // // // //   const { clearCart } = useCart();

// // // // // // //   const [orders, setOrders] = useState<any[]>([]);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   const handleLogout = async () => {
// // // // // // //     clearCart();
// // // // // // //     await logout();
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchOrders = async () => {
// // // // // // //       try {
// // // // // // //         setLoading(true);
// // // // // // //         const response = await apiClient.get('/orders/my-orders');
// // // // // // //         setOrders(response.data);
// // // // // // //       } catch (error) {
// // // // // // //         setOrders([]);
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchOrders();
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <View style={styles.container}>
// // // // // // //       <Text style={styles.title}>Profile</Text>
// // // // // // //       <Text style={styles.text}>Welcome to your profile!</Text>
// // // // // // //       <View style={styles.buttonContainer}>
// // // // // // //         <Button title="Logout" onPress={handleLogout} color="#ff3b30" />
// // // // // // //       </View>
// // // // // // //       <Text style={styles.ordersTitle}>Past Orders</Text>
// // // // // // //       {loading ? (
// // // // // // //         <ActivityIndicator size="large" />
// // // // // // //       ) : orders.length === 0 ? (
// // // // // // //         <Text style={styles.noOrders}>No past orders found.</Text>
// // // // // // //       ) : (
// // // // // // //         <FlatList
// // // // // // //           data={orders}
// // // // // // //           keyExtractor={order => order.id.toString()}
// // // // // // //           renderItem={({ item }) => (
// // // // // // //             <View style={styles.orderCard}>
// // // // // // //               <Text style={styles.orderDate}>
// // // // // // //                 {item.orderDate ? new Date(item.orderDate).toLocaleString() : 'No date'}
// // // // // // //               </Text>
// // // // // // //               <Text>Total: ${item.totalAmount}</Text>
// // // // // // //               <Text>Shipping: {item.shippingFullName}, {item.shippingAddressLine1}, {item.shippingCity}</Text>
// // // // // // //               <Text>Items:</Text>
// // // // // // //               {item.orderItems && item.orderItems.map((orderItem: any) => (
// // // // // // //                 <Text key={orderItem.id}>
// // // // // // //                   - {orderItem.product?.name || 'Unknown'} x {orderItem.quantity}
// // // // // // //                 </Text>
// // // // // // //               ))}
// // // // // // //             </View>
// // // // // // //           )}
// // // // // // //         />
// // // // // // //       )}
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // }

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
// // // // // // //   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
// // // // // // //   text: { fontSize: 16, marginBottom: 16 },
// // // // // // //   buttonContainer: { width: '80%', marginBottom: 24 },
// // // // // // //   ordersTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
// // // // // // //   noOrders: { color: 'gray', fontStyle: 'italic', marginTop: 16 },
// // // // // // //   orderCard: {
// // // // // // //     backgroundColor: '#f5f5f5',
// // // // // // //     padding: 12,
// // // // // // //     borderRadius: 8,
// // // // // // //     marginBottom: 12,
// // // // // // //   },
// // // // // // //   orderDate: { fontWeight: 'bold', marginBottom: 4 },
// // // // // // // });
// // // // // // import React, { useState, useCallback } from 'react';
// // // // // // import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
// // // // // // import { useAuth } from '../lib/AuthContext';
// // // // // // import { useCart } from '../lib/CartContext';
// // // // // // import apiClient from '../lib/api/apiClient';
// // // // // // import { useFocusEffect } from 'expo-router';

// // // // // // export default function ProfileScreen() {
// // // // // //   const { logout } = useAuth();
// // // // // //   const { clearCart } = useCart();

// // // // // //   const [orders, setOrders] = useState<any[]>([]);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   const handleLogout = async () => {
// // // // // //     clearCart();
// // // // // //     await logout();
// // // // // //   };

// // // // // //   // Refetch orders every time the screen is focused
// // // // // //   useFocusEffect(
// // // // // //     useCallback(() => {
// // // // // //       let isActive = true;
// // // // // //       const fetchOrders = async () => {
// // // // // //         try {
// // // // // //           setLoading(true);
// // // // // //           const response = await apiClient.get('/orders/my-orders');
// // // // // //           if (isActive) setOrders(response.data);
// // // // // //         } catch (error) {
// // // // // //           if (isActive) setOrders([]);
// // // // // //         } finally {
// // // // // //           if (isActive) setLoading(false);
// // // // // //         }
// // // // // //       };
// // // // // //       fetchOrders();
// // // // // //       return () => {
// // // // // //         isActive = false;
// // // // // //       };
// // // // // //     }, [])
// // // // // //   );

// // // // // //   return (
// // // // // //     <View style={styles.container}>
// // // // // //       <Text style={styles.title}>Profile</Text>
// // // // // //       <Text style={styles.text}>Welcome to your profile!</Text>
// // // // // //       <View style={styles.buttonContainer}>
// // // // // //         <Button title="Logout" onPress={handleLogout} color="#ff3b30" />
// // // // // //       </View>
// // // // // //       <Text style={styles.ordersTitle}>Past Orders</Text>
// // // // // //       {loading ? (
// // // // // //         <ActivityIndicator size="large" />
// // // // // //       ) : orders.length === 0 ? (
// // // // // //         <Text style={styles.noOrders}>No past orders found.</Text>
// // // // // //       ) : (
// // // // // //         <FlatList
// // // // // //           data={orders}
// // // // // //           keyExtractor={order => order.id.toString()}
// // // // // //           renderItem={({ item }) => (
// // // // // //             <View style={styles.orderCard}>
// // // // // //               <Text style={styles.orderDate}>
// // // // // //                 {item.orderDate ? new Date(item.orderDate).toLocaleString() : 'No date'}
// // // // // //               </Text>
// // // // // //               <Text>Total: ${item.totalAmount}</Text>
// // // // // //               <Text>Shipping: {item.shippingAddress}</Text>
// // // // // //               <Text>Items:</Text>
// // // // // //               {item.orderItems && item.orderItems.map((orderItem: any) => (
// // // // // //                 <Text key={orderItem.id}>
// // // // // //                   - {orderItem.product?.name || 'Unknown'} x {orderItem.quantity}
// // // // // //                 </Text>
// // // // // //               ))}
// // // // // //             </View>
// // // // // //           )}
// // // // // //         />
// // // // // //       )}
// // // // // //     </View>
// // // // // //   );
// // // // // // }

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
// // // // // //   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
// // // // // //   text: { fontSize: 16, marginBottom: 16 },
// // // // // //   buttonContainer: { width: '80%', marginBottom: 24 },
// // // // // //   ordersTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
// // // // // //   noOrders: { color: 'gray', fontStyle: 'italic', marginTop: 16 },
// // // // // //   orderCard: {
// // // // // //     backgroundColor: '#f5f5f5',
// // // // // //     padding: 12,
// // // // // //     borderRadius: 8,
// // // // // //     marginBottom: 12,
// // // // // //   },
// // // // // //   orderDate: { fontWeight: 'bold', marginBottom: 4 },
// // // // // // });

// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
// // // // // import { useAuth } from '../lib/AuthContext';
// // // // // import apiClient from '../lib/api/apiClient';
// // // // // import { useRouter } from 'expo-router';

// // // // // export default function ProfileScreen() {
// // // // //   const { logout, user, isAuthenticated } = useAuth();
// // // // //   const router = useRouter();

// // // // //   const [orders, setOrders] = useState<any[]>([]);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const handleLogout = async () => {
// // // // //     await logout();
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     // This flag prevents state updates if the component unmounts or auth state changes
// // // // //     let isCancelled = false;

// // // // //     const fetchOrders = async () => {
// // // // //       setLoading(true);
// // // // //       try {
// // // // //         const response = await apiClient.get('/orders/my-orders');
// // // // //         // Only update state if the effect has not been cancelled
// // // // //         if (!isCancelled) {
// // // // //           setOrders(response.data);
// // // // //         }
// // // // //       } catch (error) {
// // // // //         if (!isCancelled) {
// // // // //           console.error("Failed to fetch orders:", error);
// // // // //           setOrders([]);
// // // // //         }
// // // // //       } finally {
// // // // //         if (!isCancelled) {
// // // // //           setLoading(false);
// // // // //         }
// // // // //       }
// // // // //     };

// // // // //     if (isAuthenticated) {
// // // // //       fetchOrders();
// // // // //     } else {
// // // // //       // If not authenticated, ensure orders and loading state are cleared.
// // // // //       setOrders([]);
// // // // //       setLoading(false);
// // // // //     }

// // // // //     // This is the cleanup function. It runs when the component unmounts
// // // // //     // or when the `isAuthenticated` dependency changes.
// // // // //     return () => {
// // // // //       isCancelled = true;
// // // // //     };
// // // // //   }, [isAuthenticated]); // This effect re-runs whenever the user logs in or out.

// // // // //   if (!isAuthenticated) {
// // // // //     return (
// // // // //       <View style={styles.container}>
// // // // //         <Text style={styles.title}>My Profile</Text>
// // // // //         <Text style={styles.text}>Log in to view your profile and past orders.</Text>
// // // // //         <View style={styles.authButtons}>
// // // // //           <Button title="Login" onPress={() => router.push('/login')} />
// // // // //           <Button title="Sign Up" onPress={() => router.push('/signup')} color="#555" />
// // // // //         </View>
// // // // //       </View>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <View style={styles.header}>
// // // // //         <Text style={styles.title}>Welcome!</Text>
// // // // //         <Button title="Logout" onPress={handleLogout} color="#ff3b30" />
// // // // //       </View>
// // // // //       <Text style={styles.text}>Logged in as: {user?.email}</Text>
      
// // // // //       <Text style={styles.ordersTitle}>Past Orders</Text>
// // // // //       {loading ? (
// // // // //         <ActivityIndicator size="large" />
// // // // //       ) : orders.length === 0 ? (
// // // // //         <Text style={styles.noOrders}>You have no past orders.</Text>
// // // // //       ) : (
// // // // //         <FlatList
// // // // //           data={orders}
// // // // //           keyExtractor={order => order.id.toString()}
// // // // //           renderItem={({ item }) => (
// // // // //             <View style={styles.orderCard}>
// // // // //               <Text style={styles.orderDate}>
// // // // //                 {item.orderDate ? new Date(item.orderDate).toLocaleString() : 'No date'}
// // // // //               </Text>
// // // // //               <Text>Total: ${item.totalAmount.toFixed(2)}</Text>
// // // // //               <Text>Shipping: {item.shippingFullName}, {item.shippingAddressLine1}</Text>
// // // // //               <Text>Items:</Text>
// // // // //               {item.orderItems && item.orderItems.map((orderItem: any) => (
// // // // //                 <Text key={orderItem.id}>
// // // // //                   - {orderItem.product?.name || 'Unknown'} x {orderItem.quantity}
// // // // //                 </Text>
// // // // //               ))}
// // // // //             </View>
// // // // //           )}
// // // // //         />
// // // // //       )}
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
// // // // //   header: {
// // // // //     flexDirection: 'row',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 8,
// // // // //   },
// // // // //   title: { fontSize: 24, fontWeight: 'bold' },
// // // // //   text: { fontSize: 16, marginBottom: 16, color: 'gray' },
// // // // //   authButtons: {
// // // // //     marginTop: 20,
// // // // //     flexDirection: 'row',
// // // // //     justifyContent: 'space-around',
// // // // //   },
// // // // //   ordersTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 },
// // // // //   noOrders: { color: 'gray', fontStyle: 'italic', marginTop: 16, textAlign: 'center' },
// // // // //   orderCard: {
// // // // //     backgroundColor: '#f5f5f5',
// // // // //     padding: 12,
// // // // //     borderRadius: 8,
// // // // //     marginBottom: 12,
// // // // //   },
// // // // //   orderDate: { fontWeight: 'bold', marginBottom: 4 },
// // // // // });
// // // // import React from 'react';
// // // // import { View, Text, StyleSheet, Button } from 'react-native';
// // // // import { useAuth } from '../lib/AuthContext';
// // // // import { useRouter } from 'expo-router';

// // // // export default function ProfileScreen() {
// // // //   const { user, logout } = useAuth();
// // // //   const router = useRouter();

// // // //   const handleLogin = () => {
// // // //     router.push('/login');
// // // //   };

// // // //   if (!user) {
// // // //     return (
// // // //       <View style={styles.container}>
// // // //         <Text style={styles.infoText}>Please log in to view your profile.</Text>
// // // //         <Button title="Go to Login" onPress={handleLogin} color="#E31937" />
// // // //       </View>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.title}>My Profile</Text>
// // // //       <View style={styles.infoContainer}>
// // // //         <Text style={styles.label}>Name:</Text>
// // // //         <Text style={styles.value}>{user.name}</Text>
// // // //       </View>
// // // //       <View style={styles.infoContainer}>
// // // //         <Text style={styles.label}>Email:</Text>
// // // //         <Text style={styles.value}>{user.email}</Text>
// // // //       </View>
// // // //       <View style={styles.infoContainer}>
// // // //         <Text style={styles.label}>Role:</Text>
// // // //         <Text style={styles.value}>{user.role.replace('ROLE_', '')}</Text>
// // // //       </View>
// // // //       <View style={styles.buttonContainer}>
// // // //         <Button title="Logout" onPress={logout} color="#E31937" />
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     padding: 20,
// // // //     backgroundColor: '#f5f5f5',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   title: {
// // // //     fontSize: 28,
// // // //     fontWeight: 'bold',
// // // //     textAlign: 'center',
// // // //     marginBottom: 30,
// // // //   },
// // // //   infoContainer: {
// // // //     flexDirection: 'row',
// // // //     marginBottom: 15,
// // // //     backgroundColor: 'white',
// // // //     padding: 15,
// // // //     borderRadius: 8,
// // // //     alignItems: 'center',
// // // //   },
// // // //   label: {
// // // //     fontSize: 18,
// // // //     fontWeight: '600',
// // // //     color: '#333',
// // // //     width: 80,
// // // //   },
// // // //   value: {
// // // //     fontSize: 18,
// // // //     color: '#555',
// // // //     flex: 1,
// // // //   },
// // // //   infoText: {
// // // //     fontSize: 18,
// // // //     textAlign: 'center',
// // // //     marginBottom: 20,
// // // //     color: '#666',
// // // //   },
// // // //   buttonContainer: {
// // // //     marginTop: 40,
// // // //   },
// // // // });
// // // import React from 'react';
// // // import { View, Text, StyleSheet, Button } from 'react-native';
// // // import { useAuth } from '../lib/AuthContext';
// // // import { useRouter } from 'expo-router';

// // // export default function ProfileScreen() {
// // //   const { user, logout } = useAuth();
// // //   const router = useRouter();

// // //   const handleLogin = () => {
// // //     router.push('/login');
// // //   };

// // //   if (!user) {
// // //     return (
// // //       <View style={styles.container}>
// // //         <Text style={styles.infoText}>Please log in to view your profile.</Text>
// // //         <Button title="Go to Login" onPress={handleLogin} color="#E31937" />
// // //       </View>
// // //     );
// // //   }

// // //   // The user object has a 'roles' array. We'll display the first role.
// // //   const displayRole = user.roles && user.roles.length > 0 
// // //     ? user.roles[0].replace('ROLE_', '') 
// // //     : 'USER';

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>My Profile</Text>
// // //       <View style={styles.infoContainer}>
// // //         <Text style={styles.label}>Name:</Text>
// // //         <Text style={styles.value}>{user.name}</Text>
// // //       </View>
// // //       <View style={styles.infoContainer}>
// // //         <Text style={styles.label}>Email:</Text>
// // //         <Text style={styles.value}>{user.email}</Text>
// // //       </View>
// // //       <View style={styles.infoContainer}>
// // //         <Text style={styles.label}>Role:</Text>
// // //         <Text style={styles.value}>{displayRole}</Text>
// // //       </View>
// // //       <View style={styles.buttonContainer}>
// // //         <Button title="Logout" onPress={logout} color="#E31937" />
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 20,
// // //     backgroundColor: '#f5f5f5',
// // //     justifyContent: 'center',
// // //   },
// // //   title: {
// // //     fontSize: 28,
// // //     fontWeight: 'bold',
// // //     textAlign: 'center',
// // //     marginBottom: 30,
// // //   },
// // //   infoContainer: {
// // //     flexDirection: 'row',
// // //     marginBottom: 15,
// // //     backgroundColor: 'white',
// // //     padding: 15,
// // //     borderRadius: 8,
// // //     alignItems: 'center',
// // //   },
// // //   label: {
// // //     fontSize: 18,
// // //     fontWeight: '600',
// // //     color: '#333',
// // //     width: 80,
// // //   },
// // //   value: {
// // //     fontSize: 18,
// // //     color: '#555',
// // //     flex: 1,
// // //   },
// // //   infoText: {
// // //     fontSize: 18,
// // //     textAlign: 'center',
// // //     marginBottom: 20,
// // //     color: '#666',
// // //   },
// // //   buttonContainer: {
// // //     marginTop: 40,
// // //   },
// // // });
// // import React from 'react';
// // import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
// // import { useAuth } from '../lib/AuthContext';
// // import { useRouter } from 'expo-router';
// // import { useCart } from '../lib/CartContext';
// // import { FontAwesome } from '@expo/vector-icons';

// // export default function ProfileScreen() {
// //   const { user, logout } = useAuth();
// //   const router = useRouter();
// //   const { items, total } = useCart();

// //   const handleLogin = () => {
// //     router.push('/login');
// //   };

// //   if (!user) {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.infoText}>Please log in to view your profile.</Text>
// //         <Button title="Go to Login" onPress={handleLogin} color="#E31937" />
// //       </View>
// //     );
// //   }

// //   const displayRole = user.roles && user.roles.length > 0 
// //     ? user.roles[0].replace('ROLE_', '') 
// //     : 'USER';

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>My Profile</Text>
// //       <View style={styles.infoContainer}>
// //         <Text style={styles.label}>Name:</Text>
// //         <Text style={styles.value}>{user.name}</Text>
// //       </View>
// //       <View style={styles.infoContainer}>
// //         <Text style={styles.label}>Email:</Text>
// //         <Text style={styles.value}>{user.email}</Text>
// //       </View>
// //       <View style={styles.infoContainer}>
// //         <Text style={styles.label}>Role:</Text>
// //         <Text style={styles.value}>{displayRole}</Text>
// //       </View>

// //       {/* --- Cart Summary Section --- */}
// //       <TouchableOpacity style={styles.cartContainer} onPress={() => router.push('/cart')}>
// //         <View>
// //             <Text style={styles.cartTitle}>My Cart</Text>
// //             <Text style={styles.cartSubtitle}>{items.length} item(s) - ${total.toFixed(2)}</Text>
// //         </View>
// //         <FontAwesome name="chevron-right" size={20} color="#555" />
// //       </TouchableOpacity>

// //       <View style={styles.buttonContainer}>
// //         <Button title="Logout" onPress={logout} color="#E31937" />
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     backgroundColor: '#f5f5f5',
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginBottom: 30,
// //   },
// //   infoContainer: {
// //     flexDirection: 'row',
// //     marginBottom: 15,
// //     backgroundColor: 'white',
// //     padding: 15,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   label: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#333',
// //     width: 80,
// //   },
// //   value: {
// //     fontSize: 18,
// //     color: '#555',
// //     flex: 1,
// //   },
// //   infoText: {
// //     fontSize: 18,
// //     textAlign: 'center',
// //     marginBottom: 20,
// //     color: '#666',
// //   },
// //   cartContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     backgroundColor: 'white',
// //     padding: 15,
// //     borderRadius: 8,
// //     marginTop: 20,
// //   },
// //   cartTitle: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   cartSubtitle: {
// //     fontSize: 14,
// //     color: '#555',
// //     marginTop: 4,
// //   },
// //   buttonContainer: {
// //     marginTop:40,
// //   },
// // });
// import React, { useState, useCallback } from 'react';
// import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from 'react-native';
// import { useAuth } from '../lib/AuthContext';
// import { useRouter, useFocusEffect } from 'expo-router';
// import { useCart } from '../lib/CartContext';
// import { FontAwesome } from '@expo/vector-icons';
// import apiClient from '../lib/api/apiClient';
// import { Order } from '../lib/types';

// export default function ProfileScreen() {
//   const { user, logout, isAuthenticated } = useAuth();
//   const router = useRouter();
//   const { items, total } = useCart();

//   // State for past orders
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loadingOrders, setLoadingOrders] = useState(false);

//   const handleLogin = () => {
//     router.push('/login');
//   };

//   // This hook refetches orders every time the user navigates to this screen
//   useFocusEffect(
//     useCallback(() => {
//       let isActive = true;

//       const fetchOrders = async () => {
//         if (!isAuthenticated) {
//           setOrders([]);
//           return;
//         }
//         setLoadingOrders(true);
//         try {
//           const response = await apiClient.get<Order[]>('/orders/my-orders');
//           if (isActive) setOrders(response.data);
//         } catch (error) {
//           console.error("Failed to fetch orders:", error);
//           if (isActive) setOrders([]);
//         } finally {
//           if (isActive) setLoadingOrders(false);
//         }
//       };

//       fetchOrders();

//       return () => { isActive = false; };
//     }, [isAuthenticated])
//   );

//   if (!user) {
//     return (
//       <View style={styles.loggedOutContainer}>
//         <Text style={styles.infoText}>Please log in to view your profile.</Text>
//         <Button title="Go to Login" onPress={handleLogin} color="#808080" />
//       </View>
//     );
//   }

//   const displayRole = user.roles && user.roles.length > 0 
//     ? user.roles[0].replace('ROLE_', '') 
//     : 'USER';

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
//       <Text style={styles.title}>My Profile</Text>
      
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Name:</Text>
//         <Text style={styles.value}>{user.name}</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Email:</Text>
//         <Text style={styles.value}>{user.email}</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Role:</Text>
//         <Text style={styles.value}>{displayRole}</Text>
//       </View>

//       <TouchableOpacity style={styles.cartContainer} onPress={() => router.push('/cart')}>
//         <View>
//             <Text style={styles.cartTitle}>My Cart</Text>
//             <Text style={styles.cartSubtitle}>{items.length} item(s) - ${total.toFixed(2)}</Text>
//         </View>
//         <FontAwesome name="chevron-right" size={20} color="#555" />
//       </TouchableOpacity>

//       {/* --- Past Orders Section --- */}
//       <View style={styles.ordersSection}>
//         <Text style={styles.sectionTitle}>Past Orders</Text>
//         {loadingOrders ? (
//           <ActivityIndicator size="large" color="#808080" />
//         ) : orders.length === 0 ? (
//           <Text style={styles.noOrdersText}>You have no past orders.</Text>
//         ) : (
//           orders.map(order => (
//             <View key={order.id} style={styles.orderCard}>
//               <View style={styles.orderHeader}>
//                 <Text style={styles.orderId}>Order #{order.id}</Text>
//                 <Text style={styles.orderDate}>{new Date(order.orderDate).toLocaleDateString()}</Text>
//               </View>
//               <Text style={styles.orderTotal}>Total: ${order.totalAmount.toFixed(2)}</Text>
//               <Text style={styles.orderShipping}>Shipped to: {order.shippingFullName}</Text>
//               <View style={styles.orderItemsContainer}>
//                 {order.orderItems.map(orderItem => (
//                   <Text key={orderItem.id} style={styles.orderItemText}>
//                     - {orderItem.product.name} (x{orderItem.quantity})
//                   </Text>
//                 ))}
//               </View>
//             </View>
//           ))
//         )}
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button title="Logout" onPress={logout} color="#808080" />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   loggedOutContainer: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     marginBottom: 15,
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     width: 80,
//   },
//   value: {
//     fontSize: 18,
//     color: '#555',
//     flex: 1,
//   },
//   infoText: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#666',
//   },
//   cartContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 8,
//   },
//   cartTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   cartSubtitle: {
//     fontSize: 14,
//     color: '#555',
//     marginTop: 4,
//   },
//   buttonContainer: {
//     marginTop: 40,
//   },
//   ordersSection: {
//     marginTop: 30,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color: '#333',
//   },
//   noOrdersText: {
//     textAlign: 'center',
//     color: '#666',
//     fontStyle: 'italic',
//     marginTop: 10,
//   },
//   orderCard: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//   },
//   orderHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     paddingBottom: 10,
//     marginBottom: 10,
//   },
//   orderId: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   orderDate: {
//     fontSize: 14,
//     color: '#666',
//   },
//   orderTotal: {
//     fontSize: 16,
//     fontWeight: '500',
//     marginBottom: 5,
//   },
//   orderShipping: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 10,
//   },
//   orderItemsContainer: {
//     marginTop: 5,
//   },
//   orderItemText: {
//     fontSize: 14,
//     color: '#444',
//   },
// });
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useAuth } from '../lib/AuthContext';
import { useRouter, useFocusEffect } from 'expo-router';
import { useCart } from '../lib/CartContext';
import { FontAwesome } from '@expo/vector-icons';
import apiClient from '../lib/api/apiClient';
import { Order } from '../lib/types';

export default function ProfileScreen() {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const { items, total } = useCart();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  const handleLogin = () => {
    router.push('/login');
  };

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const fetchOrders = async () => {
        if (!isAuthenticated) {
          setOrders([]);
          return;
        }
        setLoadingOrders(true);
        try {
          const response = await apiClient.get<Order[]>('/orders/my-orders');
          if (isActive) setOrders(response.data);
        } catch (error) {
          console.error("Failed to fetch orders:", error);
          if (isActive) setOrders([]);
        } finally {
          if (isActive) setLoadingOrders(false);
        }
      };

      fetchOrders();

      return () => { isActive = false; };
    }, [isAuthenticated])
  );

  if (!user) {
    return (
      <View style={styles.loggedOutContainer}>
        <Text style={styles.infoText}>Please log in to view your profile.</Text>
        <TouchableOpacity style={styles.loggedOutButton} onPress={handleLogin}>
          <Text style={styles.loggedOutButtonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const displayRole = user.roles && user.roles.length > 0 
    ? user.roles[0].replace('ROLE_', '') 
    : 'USER';

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      <Text style={styles.title}>My Profile</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Role:</Text>
        <Text style={styles.value}>{displayRole}</Text>
      </View>

      <TouchableOpacity style={styles.cartContainer} onPress={() => router.push('/cart')}>
        <View>
            <Text style={styles.cartTitle}>My Cart</Text>
            <Text style={styles.cartSubtitle}>{items.length} item(s) - ${total.toFixed(2)}</Text>
        </View>
        <FontAwesome name="chevron-right" size={20} color="#555" />
      </TouchableOpacity>

      <View style={styles.ordersSection}>
        <Text style={styles.sectionTitle}>Past Orders</Text>
        {loadingOrders ? (
          <ActivityIndicator size="large" color="#808080" />
        ) : orders.length === 0 ? (
          <Text style={styles.noOrdersText}>You have no past orders.</Text>
        ) : (
          orders.map(order => (
            <View key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <Text style={styles.orderId}>Order #{order.id}</Text>
                <Text style={styles.orderDate}>{new Date(order.orderDate).toLocaleDateString()}</Text>
              </View>
              <Text style={styles.orderTotal}>Total: ${order.totalAmount.toFixed(2)}</Text>
              <Text style={styles.orderShipping}>Shipped to: {order.shippingFullName}</Text>
              <View style={styles.orderItemsContainer}>
                {order.orderItems.map(orderItem => (
                  <Text key={orderItem.id} style={styles.orderItemText}>
                    - {orderItem.product.name} (x{orderItem.quantity})
                  </Text>
                ))}
              </View>
            </View>
          ))
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={logout} color="#808080" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  loggedOutContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    width: 80,
  },
  value: {
    fontSize: 18,
    color: '#555',
    flex: 1,
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  loggedOutButton: {
    backgroundColor: '#808080',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loggedOutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  cartSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 40,
  },
  ordersSection: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  noOrdersText: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
    marginTop: 10,
  },
  orderCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  orderShipping: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  orderItemsContainer: {
    marginTop: 5,
  },
  orderItemText: {
    fontSize: 14,
    color:'#444',
  },
});