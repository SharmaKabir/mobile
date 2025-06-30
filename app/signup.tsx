// // // // // import React, { useState } from 'react';
// // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// // // // // import { router } from 'expo-router';

// // // // // export default function SignupScreen() {
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [password, setPassword] = useState('');

// // // // //   const handleSignup = () => {
// // // // //     if (email && password) {
// // // // //       router.push('/login');
// // // // //     } else {
// // // // //       alert('Please enter email and password');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <Text style={styles.title}>Sign Up</Text>
// // // // //       <TextInput
// // // // //         style={styles.input}
// // // // //         placeholder="Email"
// // // // //         value={email}
// // // // //         onChangeText={setEmail}
// // // // //       />
// // // // //       <TextInput
// // // // //         style={styles.input}
// // // // //         placeholder="Password"
// // // // //         value={password}
// // // // //         onChangeText={setPassword}
// // // // //         secureTextEntry
// // // // //       />
// // // // //       <TouchableOpacity style={styles.button} onPress={handleSignup}>
// // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // //       </TouchableOpacity>
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: { flex: 1, padding: 16, justifyContent: 'center' },
// // // // //   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
// // // // //   input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16 },
// // // // //   button: { backgroundColor: '#007AFF', padding: 16, alignItems: 'center' },
// // // // //   buttonText: { color: '#fff', fontWeight: 'bold' },
// // // // // });

// // // // import React, { useState } from 'react';
// // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// // // // import { router } from 'expo-router';
// // // // import apiClient from './lib/api/apiClient'; // Import our new API client

// // // // export default function SignupScreen() {
// // // //   const [name, setName] = useState(''); // Add state for name
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [isLoading, setIsLoading] = useState(false); // Add loading state

// // // //   // This is the new, real signup logic
// // // //   // const handleSignup = async () => {
// // // //   //   if (!name || !email || !password) {
// // // //   //     Alert.alert('Error', 'Please fill in all fields.');
// // // //   //     return;
// // // //   //   }
// // // //   //   setIsLoading(true);
// // // //   //   try {
// // // //   //     // Call the backend API
// // // //   //     await apiClient.post('/auth/register', { name, email, password });
      
// // // //   //     Alert.alert('Success', 'Account created! Please log in.');
// // // //   //     router.push('/login'); // Navigate to the login screen on success

// // // //   //   } catch (error: any) {
// // // //   //     const errorMessage = error.response?.data || 'An unknown error occurred.';
// // // //   //     Alert.alert('Registration Failed', errorMessage);
// // // //   //   } finally {
// // // //   //     setIsLoading(false);
// // // //   //   }
// // // //   // };
// // // //   // Update the handleSignup function in your SignupScreen component
// // // // const handleSignup = async () => {
// // // //   console.log('Signup button pressed for:', email); // Log the attempt
  
// // // //   if (!name || !email || !password) {
// // // //     Alert.alert('Error', 'Please fill in all fields.');
// // // //     return;
// // // //   }
  
// // // //   setIsLoading(true);
// // // //   try {
// // // //     console.log('Attempting signup API call...');
// // // //     await apiClient.post('/auth/register', { name, email, password });
// // // //     console.log('Signup API call successful');
    
// // // //     Alert.alert('Success', 'Account created! Please log in.', [
// // // //       { text: 'OK', onPress: () => router.push('/login') }
// // // //     ]);
// // // //   } catch (error: any) {
// // // //     console.error('Signup error:', error); // Log the full error
// // // //     const errorMessage = error.response?.data || 
// // // //                          error.message || 
// // // //                          'Registration failed. Check network and backend server.';
// // // //     Alert.alert('Registration Failed', errorMessage);
// // // //   } finally {
// // // //     setIsLoading(false);
// // // //   }
// // // // };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.title}>Create Account</Text>
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Full Name"
// // // //         value={name}
// // // //         onChangeText={setName}
// // // //         autoCapitalize="words"
// // // //       />
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
// // // //       <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={isLoading}>
// // // //         <Text style={styles.buttonText}>{isLoading ? 'Creating Account...' : 'Sign Up'}</Text>
// // // //       </TouchableOpacity>
// // // //     </View>
// // // //   );
// // // // }

// // // // // You can reuse or update your existing styles
// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, padding: 16, justifyContent: 'center', backgroundColor: '#fff' },
// // // //   title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// // // //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, paddingHorizontal: 12, borderRadius: 8 },
// // // //   button: { backgroundColor: '#007AFF', padding: 16, alignItems: 'center', borderRadius: 8 },
// // // //   buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// // // // });

// // // import React, { useState } from 'react';
// // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// // // import { router } from 'expo-router';
// // // import apiClient from './lib/api/apiClient';

// // // export default function SignupScreen() {
// // //   const [name, setName] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   const handleSignup = async () => {
// // //     // 1. Validate input on the client-side first
// // //     if (!name || !email || !password) {
// // //       Alert.alert('Validation Error', 'Please fill in all fields.');
// // //       return;
// // //     }

// // //     // 2. Set loading state to give user feedback
// // //     setIsLoading(true);

// // //     try {
// // //       // 3. Make the API call to the backend
// // //       console.log(`Attempting to register user: ${email}`);
// // //       await apiClient.post('/auth/register', { name, email, password });
// // //       console.log('Registration successful!');

// // //       // 4. On success, show an alert. When the user presses "OK", navigate them.
// // //       // This is the most reliable way to handle post-action navigation.
// // //       Alert.alert(
// // //         'Success',
// // //         'Your account has been created successfully.',
// // //         [
// // //           {
// // //             text: 'Go to Login',
// // //             onPress: () => {
// // //               console.log('User acknowledged success. Navigating to /login...');
// // //               router.push('/login');
// // //             },
// // //           },
// // //         ],
// // //         { cancelable: false } // This prevents the user from accidentally dismissing the alert
// // //       );

// // //     } catch (error: any) {
// // //       // 5. If the API call fails, show a detailed error message
// // //       console.error('Registration failed:', error);
// // //       // Use the error message from the backend if available
// // //       const errorMessage = error.response?.data || 'An unknown error occurred. Please try again.';
// // //       Alert.alert('Registration Failed', errorMessage);
// // //     } finally {
// // //       // 6. Always reset the loading state
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Create Account</Text>
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Full Name"
// // //         value={name}
// // //         onChangeText={setName}
// // //         autoCapitalize="words"
// // //       />
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
// // //       <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={isLoading}>
// // //         {isLoading ? (
// // //           <ActivityIndicator color="#fff" />
// // //         ) : (
// // //           <Text style={styles.buttonText}>Sign Up</Text>
// // //         )}
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, padding: 16, justifyContent: 'center', backgroundColor: '#fff' },
// // //   title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// // //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, paddingHorizontal: 12, borderRadius: 8 },
// // //   button: { backgroundColor: '#007AFF', padding: 16, alignItems: 'center', borderRadius: 8, height: 58, justifyContent: 'center' },
// // //   buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// // // });


// // import React, { useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// // import { router } from 'expo-router';
// // import apiClient from './lib/api/apiClient';

// // export default function SignupScreen() {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleSignup = async () => {
// //     // 1. Validate input on the client-side first
// //     if (!name || !email || !password) {
// //       Alert.alert('Validation Error', 'Please fill in all fields.');
// //       return;
// //     }

// //     // 2. Set loading state to give user feedback
// //     setIsLoading(true);

// //     try {
// //       // 3. Make the API call to the backend
// //       console.log(`Frontend: Attempting to register user: ${email}`);
// //       await apiClient.post('/auth/register', { name, email, password });
// //       console.log('Frontend: Registration API call was successful!');

// //       // 4. THIS IS THE CRITICAL PART THAT WAS MISSING.
// //       // On success, show an alert. When the user presses "OK", navigate them.
// //       Alert.alert(
// //         'Success',
// //         'Your account has been created successfully.',
// //         [
// //           {
// //             text: 'Go to Login',
// //             onPress: () => {
// //               console.log('Frontend: User acknowledged success. Navigating to /login...');
// //               router.push('/login');
// //             },
// //           },
// //         ],
// //         { cancelable: false } // This prevents the user from accidentally dismissing the alert
// //       );

// //     } catch (error: any) {
// //       // 5. If the API call fails, show a detailed error message
// //       console.error('Frontend: Registration failed:', error);
// //       // Use the error message from the backend if available
// //       const errorMessage = error.response?.data || 'An unknown error occurred. Please try again.';
// //       Alert.alert('Registration Failed', errorMessage);
// //     } finally {
// //       // 6. Always reset the loading state
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Create Account</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Full Name"
// //         value={name}
// //         onChangeText={setName}
// //         autoCapitalize="words"
// //       />
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
// //       <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={isLoading}>
// //         {isLoading ? (
// //           <ActivityIndicator color="#fff" />
// //         ) : (
// //           <Text style={styles.buttonText}>Sign Up</Text>
// //         )}
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 16, justifyContent: 'center', backgroundColor: '#fff' },
// //   title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
// //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, paddingHorizontal: 12, borderRadius: 8 },
// //   button: { backgroundColor: '#007AFF', padding: 16, alignItems: 'center', borderRadius: 8, height: 58, justifyContent: 'center' },
// //   buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// // });


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, Button } from 'react-native';
// import { router } from 'expo-router';
// import apiClient from './lib/api/apiClient';

// export default function SignupScreen() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
  
//   // NEW STATE: We will use this to explicitly show a success view.
//   const [signupSuccess, setSignupSuccess] = useState(false);

//   const handleSignup = async () => {
//     if (!name || !email || !password) {
//       Alert.alert('Validation Error', 'Please fill in all fields.');
//       return;
//     }
//     setIsLoading(true);
//     try {
//       await apiClient.post('/auth/register', { name, email, password });
      
//       // ON SUCCESS: Instead of an alert, we now update the component's state.
//       // This is a more reliable way to trigger a UI change.
//       console.log("Frontend: API call successful. Updating state to show success view.");
//       setSignupSuccess(true);

//     } catch (error: any) {
//       const errorMessage = error.response?.data || 'An unknown error occurred.';
//       Alert.alert('Registration Failed', errorMessage);
//     } finally {
//       // We always want to stop the spinner once the API call is complete.
//       setIsLoading(false);
//     }
//   };

//   // If signup was successful, we render a completely different view.
//   if (signupSuccess) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Success!</Text>
//         <Text style={styles.successText}>Your account has been created.</Text>
//         <Button title="Go to Login" onPress={() => router.push('/login')} />
//       </View>
//     );
//   }

//   // Otherwise, we render the normal signup form.
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create Account</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Full Name"
//         value={name}
//         onChangeText={setName}
//         autoCapitalize="words"
//       />
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
//       <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={isLoading}>
//         {isLoading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Sign Up</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// }

// // Add the new successText style to the StyleSheet
// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, justifyContent: 'center', backgroundColor: '#fff' },
//   title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
//   successText: { fontSize: 18, textAlign: 'center', marginBottom: 20, color: 'green' },
//   input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, paddingHorizontal: 12, borderRadius: 8 },
//   button: { backgroundColor: '#007AFF', padding: 16, alignItems: 'center', borderRadius: 8, height: 58, justifyContent: 'center' },
//   buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// });
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import apiClient from './lib/api/apiClient';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    try {
      await apiClient.post('/auth/register', { name, email, password });

      Alert.alert(
        'Success',
        'Your account has been created successfully.',
        [
          {
            text: 'Go to Login',
            onPress: () => router.push('/login'),
          },
        ],
        { cancelable: false }
      );

    } catch (error: any) {
      const errorMessage = error.response?.data || 'An unknown error occurred. Please try again.';
      Alert.alert('Registration Failed', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
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
      <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    justifyContent: 'center', 
    backgroundColor: '#f5f5f5'
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 24, 
    textAlign: 'center',
    color: '#333'
  },
  input: { 
    height: 50, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    marginBottom: 12, 
    paddingHorizontal: 12, 
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  button: { 
    backgroundColor: '#808080', 
    padding: 16, 
    alignItems: 'center', 
    borderRadius: 8, 
    height: 58, 
    justifyContent: 'center' 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});