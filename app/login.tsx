// // // // // // app/login.tsx
// // // // // import React, { useState } from 'react';
// // // // // import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// // // // // import { Link, useRouter } from 'expo-router';

// // // // // export default function LoginScreen() {
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [password, setPassword] = useState('');
// // // // //   const router = useRouter();

// // // // //   const handleLogin = () => {
// // // // //     // TODO: Connect to Spring Boot backend
// // // // //     console.log('Logging in with:', email, password);
// // // // //     if (email && password) {
// // // // //       // On success, you'd save a token and redirect
// // // // //       Alert.alert('Login Success', 'Welcome back!');
// // // // //       router.replace('/(tabs)/'); // Use replace to prevent going back to login
// // // // //     } else {
// // // // //       Alert.alert('Login Failed', 'Please enter email and password.');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <Text style={styles.title}>Login</Text>
// // // // //       <TextInput
// // // // //         style={styles.input}
// // // // //         placeholder="Email"
// // // // //         value={email}
// // // // //         onChangeText={setEmail}
// // // // //         keyboardType="email-address"
// // // // //         autoCapitalize="none"
// // // // //       />
// // // // //       <TextInput
// // // // //         style={styles.input}
// // // // //         placeholder="Password"
// // // // //         value={password}
// // // // //         onChangeText={setPassword}
// // // // //         secureTextEntry
// // // // //       />
// // // // //       <Button title="Login" onPress={handleLogin} />
// // // // //       <Link href="/signup" style={styles.link}>
// // // // //         Don't have an account? Sign Up
// // // // //       </Link>
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: { flex: 1, justifyContent: 'center', padding: 16 },
// // // // //   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// // // // //   input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8, borderRadius: 4 },
// // // // //   link: { marginTop: 16, color: 'blue', textAlign: 'center' },
// // // // // });


// // // // import React, { useState } from 'react';
// // // // import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// // // // import { Link } from 'expo-router';
// // // // import { useAuth } from './lib/AuthContext'; // Import our auth hook

// // // // export default function LoginScreen() {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const { login } = useAuth();

// // // //   const handleLogin = async () => {
// // // //     setIsLoading(true);
// // // //     try {
// // // //       await login(email, password);
// // // //       // Navigation will be handled automatically by our root layout now!
// // // //     } catch (error: any) {
// // // //       // You can inspect the error from axios for more specific messages
// // // //       const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
// // // //       Alert.alert('Login Error', errorMessage);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.title}>Login</Text>
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Email"
// // // //         value={email}
// // // //         onChangeText={setEmail}
// // // //         keyboardType="email-address"
// // // //         autoCapitalize="none"
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Password"
// // // //         value={password}
// // // //         onChangeText={setPassword}
// // // //         secureTextEntry
// // // //       />
// // // //       <Button title={isLoading ? 'Logging in...' : 'Login'} onPress={handleLogin} disabled={isLoading} />
// // // //       <Link href="/signup" style={styles.link}>
// // // //         Don't have an account? Sign Up
// // // //       </Link>
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //     container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
// // // //     title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// // // //     input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, paddingHorizontal: 12, borderRadius: 8 },
// // // //     link: { marginTop: 16, color: 'blue', textAlign: 'center', fontSize: 16 },
// // // // });

// // // // import React, { useState } from 'react';
// // // // import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// // // // import { Link, useRouter } from 'expo-router';
// // // // import { useAuth } from './lib/AuthContext'; // Import our new auth hook

// // // // export default function LoginScreen() {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const { login } = useAuth();
// // // //   const router = useRouter();

// // // //   const handleLogin = async () => {
// // // //     console.log('Login button pressed. Attempting to log in...');
// // // //     setIsLoading(true);
// // // //     try {
// // // //       await login(email, password);
// // // //       console.log('Login successful!'); 
// // // //       // On successful login, the context now has the token.
// // // //       // We can now navigate to the main part of the app.
// // // //       router.replace('/(tabs)');
// // // //     } catch (error: any) {
// // // //       const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
// // // //       Alert.alert('Login Error', errorMessage);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.title}>Welcome Back</Text>
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Email"
// // // //         value={email}
// // // //         onChangeText={setEmail}
// // // //         keyboardType="email-address"
// // // //         autoCapitalize="none"
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Password"
// // // //         value={password}
// // // //         onChangeText={setPassword}
// // // //         secureTextEntry
// // // //       />
// // // //       {isLoading ? (
// // // //         <ActivityIndicator size="large" color="#007AFF" />
// // // //       ) : (
// // // //         <Button title="Login" onPress={handleLogin} />
// // // //       )}
// // // //       <Link href="/signup" style={styles.link}>
// // // //         Don't have an account? Sign Up
// // // //       </Link>
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
// // // //   title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// // // //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 16, paddingHorizontal: 12, borderRadius: 8 },
// // // //   link: { marginTop: 24, color: 'blue', textAlign: 'center', fontSize: 16 },
// // // // });



// // // import React, { useState } from 'react';
// // // import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// // // import { Link } from 'expo-router';
// // // import { useAuth } from './lib/AuthContext';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // import apiClient from './lib/api/apiClient';

// // // export default function LoginScreen() {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const { login } = useAuth();

// // //   // const handleLogin = async () => {
// // //   //   setIsLoading(true);
// // //   //   try {
// // //   //     await login(email, password);
// // //   //     // The root layout will now handle the redirect automatically.
// // //   //     // No router.replace() needed here.
// // //   //   } catch (error: any) {
// // //   //     const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
// // //   //     Alert.alert('Login Error', errorMessage);
// // //   //   } finally {
// // //   //     setIsLoading(false);
// // //   //   }
// // //   // };
// // //   const handleLogin = async () => {
// // //   // Create the exact login payload to match what your backend expects
// // //   const loginPayload = {
// // //     email: email.trim(), // Remove any whitespace
// // //     password: password
// // //   };
  
// // //   console.log('Sending exact login payload:', JSON.stringify(loginPayload));
  
// // //   setIsLoading(true);
// // //   try {
// // //     // Make the call directly with apiClient for debugging
// // //     const response = await apiClient.post('/auth/login', loginPayload);
// // //     console.log('Login successful! Response:', response.data);
    
// // //     // Now handle the successful login
// // //     if (response.data.token) {
// // //       await AsyncStorage.setItem('authToken', response.data.token);
// // //       // Update app state, etc.
// // //     }
// // //   } catch (error: any) {
// // //     console.error('Login error details:', error);
// // //     Alert.alert('Login Error', error.message);
// // //   } finally {
// // //     setIsLoading(false);
// // //   }
// // // };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Welcome Back</Text>
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Email"
// // //         value={email}
// // //         onChangeText={setEmail}
// // //         keyboardType="email-address"
// // //         autoCapitalize="none"
// // //       />
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Password"
// // //         value={password}
// // //         onChangeText={setPassword}
// // //         secureTextEntry
// // //       />
// // //       {isLoading ? (
// // //         <ActivityIndicator size="large" color="#007AFF" />
// // //       ) : (
// // //         <Button title="Login" onPress={handleLogin} />
// // //       )}
// // //       <Link href="/signup" style={styles.link}>
// // //         Don't have an account? Sign Up
// // //       </Link>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
// // //   title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// // //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 16, paddingHorizontal: 12, borderRadius: 8 },
// // //   link: { marginTop: 24, color: 'blue', textAlign: 'center', fontSize: 16 },
// // // });

// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// // import { Link } from 'expo-router';
// // import { useAuth } from './lib/AuthContext';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { useEffect } from 'react'; 
// // export default function LoginScreen() {
// //   useEffect(() => {
// //   const clearStorage = async () => {
// //     console.log("Clearing all storage...");
// //     await AsyncStorage.clear();
// //     console.log("Storage cleared!");
// //   };
// //   clearStorage();
// // }, []);
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const { login } = useAuth(); // Get the login function from our context

// //   const handleLogin = async () => {
// //     if (!email || !password) {
// //       Alert.alert('Error', 'Please enter both email and password.');
// //       return;
// //     }
    
// //     setIsLoading(true);
// //     try {
// //       // This now calls the login function from AuthContext.
// //       // AuthContext will handle storing the token and updating the state.
// //       // The root layout (_layout.tsx) will see the state change and redirect automatically.
// //       await login(email, password);
// //     } catch (error: any) {
// //       const errorMessage = error.response?.data || 'Login failed. Please check your credentials.';
// //       Alert.alert('Login Error', errorMessage);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Welcome Back</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //         autoCapitalize="none"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />
// //       {isLoading ? (
// //         <ActivityIndicator size="large" color="#007AFF" />
// //       ) : (
// //         <Button title="Login" onPress={handleLogin} />
// //       )}
// //       <Link href="/signup" style={styles.link}>
// //         Don't have an account? Sign Up
// //       </Link>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
// //   title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 16, paddingHorizontal: 12, borderRadius: 8 },
// //   link: { marginTop: 24, color: 'blue', textAlign: 'center', fontSize: 16 },
// // });
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// import { Link } from 'expo-router';
// import { useAuth } from './lib/AuthContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function LoginScreen() {
//   useEffect(() => {
//     const clearStorage = async () => {
//       console.log("Clearing all storage...");
//       await AsyncStorage.clear();
//       console.log("Storage cleared!");
//     };
//     clearStorage();
//   }, []);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = useAuth();

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter both email and password.');
//       return;
//     }
    
//     setIsLoading(true);
//     try {
//       await login(email, password);
//     } catch (error: any) {
//       const errorMessage = error.response?.data || 'Login failed. Please check your credentials.';
//       Alert.alert('Login Error', errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome Back</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {isLoading ? (
//         <ActivityIndicator size="large" color="#808080" />
//       ) : (
//         <Button title="Login" onPress={handleLogin} color="#808080" />
//       )}
//       <Link href="/signup" style={styles.link}>
//         Don't have an account? Sign Up
//       </Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     justifyContent: 'center', 
//     padding: 16, 
//     backgroundColor: '#f5f5f5' // Light grey background
//   },
//   title: { 
//     fontSize: 32, 
//     fontWeight: 'bold', 
//     marginBottom: 24, 
//     textAlign: 'center',
//     color: '#333'
//   },
//   input: { 
//     height: 50, 
//     borderColor: '#ccc', 
//     borderWidth: 1, 
//     marginBottom: 16, 
//     paddingHorizontal: 12, 
//     borderRadius: 8,
//     backgroundColor: '#fff'
//   },
//   link: { 
//     marginTop: 24, 
//     color: '#808080', // Grey link color
//     textAlign: 'center', 
//     fontSize: 16 
//   },
// });
// // // // app/login.tsx
// // // import React, { useState } from 'react';
// // // import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// // // import { Link, useRouter } from 'expo-router';

// // // export default function LoginScreen() {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const router = useRouter();

// // //   const handleLogin = () => {
// // //     // TODO: Connect to Spring Boot backend
// // //     console.log('Logging in with:', email, password);
// // //     if (email && password) {
// // //       // On success, you'd save a token and redirect
// // //       Alert.alert('Login Success', 'Welcome back!');
// // //       router.replace('/(tabs)/'); // Use replace to prevent going back to login
// // //     } else {
// // //       Alert.alert('Login Failed', 'Please enter email and password.');
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Login</Text>
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Email"
// // //         value={email}
// // //         onChangeText={setEmail}
// // //         keyboardType="email-address"
// // //         autoCapitalize="none"
// // //       />
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Password"
// // //         value={password}
// // //         onChangeText={setPassword}
// // //         secureTextEntry
// // //       />
// // //       <Button title="Login" onPress={handleLogin} />
// // //       <Link href="/signup" style={styles.link}>
// // //         Don't have an account? Sign Up
// // //       </Link>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, justifyContent: 'center', padding: 16 },
// // //   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// // //   input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8, borderRadius: 4 },
// // //   link: { marginTop: 16, color: 'blue', textAlign: 'center' },
// // // });


// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// // import { Link } from 'expo-router';
// // import { useAuth } from './lib/AuthContext'; // Import our auth hook

// // export default function LoginScreen() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const { login } = useAuth();

// //   const handleLogin = async () => {
// //     setIsLoading(true);
// //     try {
// //       await login(email, password);
// //       // Navigation will be handled automatically by our root layout now!
// //     } catch (error: any) {
// //       // You can inspect the error from axios for more specific messages
// //       const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
// //       Alert.alert('Login Error', errorMessage);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Login</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //         autoCapitalize="none"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />
// //       <Button title={isLoading ? 'Logging in...' : 'Login'} onPress={handleLogin} disabled={isLoading} />
// //       <Link href="/signup" style={styles.link}>
// //         Don't have an account? Sign Up
// //       </Link>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //     container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
// //     title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// //     input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, paddingHorizontal: 12, borderRadius: 8 },
// //     link: { marginTop: 16, color: 'blue', textAlign: 'center', fontSize: 16 },
// // });

// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// // import { Link, useRouter } from 'expo-router';
// // import { useAuth } from './lib/AuthContext'; // Import our new auth hook

// // export default function LoginScreen() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const { login } = useAuth();
// //   const router = useRouter();

// //   const handleLogin = async () => {
// //     console.log('Login button pressed. Attempting to log in...');
// //     setIsLoading(true);
// //     try {
// //       await login(email, password);
// //       console.log('Login successful!'); 
// //       // On successful login, the context now has the token.
// //       // We can now navigate to the main part of the app.
// //       router.replace('/(tabs)');
// //     } catch (error: any) {
// //       const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
// //       Alert.alert('Login Error', errorMessage);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Welcome Back</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //         autoCapitalize="none"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />
// //       {isLoading ? (
// //         <ActivityIndicator size="large" color="#007AFF" />
// //       ) : (
// //         <Button title="Login" onPress={handleLogin} />
// //       )}
// //       <Link href="/signup" style={styles.link}>
// //         Don't have an account? Sign Up
// //       </Link>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
// //   title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 16, paddingHorizontal: 12, borderRadius: 8 },
// //   link: { marginTop: 24, color: 'blue', textAlign: 'center', fontSize: 16 },
// // });



// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// import { Link } from 'expo-router';
// import { useAuth } from './lib/AuthContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import apiClient from './lib/api/apiClient';

// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = useAuth();

//   // const handleLogin = async () => {
//   //   setIsLoading(true);
//   //   try {
//   //     await login(email, password);
//   //     // The root layout will now handle the redirect automatically.
//   //     // No router.replace() needed here.
//   //   } catch (error: any) {
//   //     const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
//   //     Alert.alert('Login Error', errorMessage);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };
//   const handleLogin = async () => {
//   // Create the exact login payload to match what your backend expects
//   const loginPayload = {
//     email: email.trim(), // Remove any whitespace
//     password: password
//   };
  
//   console.log('Sending exact login payload:', JSON.stringify(loginPayload));
  
//   setIsLoading(true);
//   try {
//     // Make the call directly with apiClient for debugging
//     const response = await apiClient.post('/auth/login', loginPayload);
//     console.log('Login successful! Response:', response.data);
    
//     // Now handle the successful login
//     if (response.data.token) {
//       await AsyncStorage.setItem('authToken', response.data.token);
//       // Update app state, etc.
//     }
//   } catch (error: any) {
//     console.error('Login error details:', error);
//     Alert.alert('Login Error', error.message);
//   } finally {
//     setIsLoading(false);
//   }
// };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome Back</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {isLoading ? (
//         <ActivityIndicator size="large" color="#007AFF" />
//       ) : (
//         <Button title="Login" onPress={handleLogin} />
//       )}
//       <Link href="/signup" style={styles.link}>
//         Don't have an account? Sign Up
//       </Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
//   title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
//   input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 16, paddingHorizontal: 12, borderRadius: 8 },
//   link: { marginTop: 24, color: 'blue', textAlign: 'center', fontSize: 16 },
// });

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from './lib/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react'; 
export default function LoginScreen() {
  useEffect(() => {
  const clearStorage = async () => {
    console.log("Clearing all storage...");
    await AsyncStorage.clear();
    console.log("Storage cleared!");
  };
  clearStorage();
}, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth(); // Get the login function from our context

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    
    setIsLoading(true);
    try {
      // This now calls the login function from AuthContext.
      // AuthContext will handle storing the token and updating the state.
      // The root layout (_layout.tsx) will see the state change and redirect automatically.
      await login(email, password);
    } catch (error: any) {
      const errorMessage = error.response?.data || 'Login failed. Please check your credentials.';
      Alert.alert('Login Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
      <Link href="/signup" style={styles.link}>
        Don't have an account? Sign Up
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 16, paddingHorizontal: 12, borderRadius: 8 },
  link: { marginTop: 24, color: 'blue', textAlign: 'center', fontSize: 16 },
});