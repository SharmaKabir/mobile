// // // app/_layout.tsx
// // import { Stack } from 'expo-router';
// // import { CartProvider } from './lib/CartContext';
// // import { AuthProvider } from './lib/AuthContext'; 
// // export default function RootLayout() {
// //   // Simple auth check could be done here with another context
// //   // For now, we wrap the app in the CartProvider
// //   return (
// //     <AuthProvider>
// //     <CartProvider>
// //       <Stack screenOptions={{ headerShown: false }}>
// //         {/* The (tabs) layout is rendered by default */}
// //         <Stack.Screen name="(tabs)" />
// //         {/* Define other screens outside the tab bar here */}
// //         <Stack.Screen name="login" options={{ presentation: 'modal' }} />
// //         <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
// //         <Stack.Screen name="products/[productId]" options={{ headerShown: true, title: 'Product Details' }} />
// //         <Stack.Screen name="categories/[categoryId]" options={{ headerShown: true, title: 'Category' }}/>
// //         <Stack.Screen name="cart" options={{ presentation: 'modal', headerShown: true, title: 'Your Cart' }} />
// //       </Stack>
// //     </CartProvider>
// //     </AuthProvider>
// //   );
// // }

// // import { Stack } from 'expo-router';
// // import { AuthProvider } from './lib/AuthContext'; // Import the provider

// // export default function RootLayout() {
// //   // By wrapping the Stack, every screen inside it can now use the useAuth() hook.
// //   return (
// //     <AuthProvider>
// //       <Stack screenOptions={{ headerShown: false }}>
// //         <Stack.Screen name="(tabs)" />
// //         <Stack.Screen name="login" options={{ headerShown: true, title: "Login" }}/>
// //         <Stack.Screen name="signup" options={{ presentation: 'modal', headerShown: true, title: "Sign Up" }}/>
// //         {/* Add other non-tab screens here if you have them */}
// //       </Stack>
// //     </AuthProvider>
// //   );
// // }

// import { Stack, useRouter, useSegments } from 'expo-router';
// import { AuthProvider, useAuth } from './lib/AuthContext';
// import { CartProvider } from './lib/CartContext';
// import { useEffect } from 'react';
// import { ActivityIndicator, View } from 'react-native';
// import { CheckoutProvider } from './lib/CheckoutContext'; 
// import Toast from 'react-native-toast-message';

// export default function RootLayout() {
//   // Wrap the entire app in your providers
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <CheckoutProvider>
//         <MainLayout />
//         <Toast />
//         </CheckoutProvider>
//       </CartProvider>
//     </AuthProvider>
//   );
// }

// function MainLayout() {
//   const { isAuthenticated, isLoading } = useAuth();
//   const segments = useSegments();
//   const router = useRouter();

//   useEffect(() => {
//     if (isLoading) return; // Don't do anything while we're checking for a token

//     // Check if the current route is one of the authentication screens
//     const inAuthPages = segments.length > 0 && (segments[0] === 'login' || segments[0] === 'signup');

//     if (isAuthenticated && inAuthPages) {
//       // If the user is signed in, redirect them away from login/signup to the main app.
//       router.replace('/(tabs)');
//     // } else if (!isAuthenticated && !inAuthPages) {
//     //   // If the user is not signed in and not on an auth page,
//     //   // redirect them to the login page.
//     //   router.replace('/login');
//     }
//   }, [isAuthenticated, isLoading, segments]);

//   // Show a loading spinner while we check for the token
//   if (isLoading) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <ActivityIndicator size="large" />
//         </View>
//     );
//   }

//   // This stack contains all the screens in your app
//   return (
//       <Stack screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="(tabs)" />
//           <Stack.Screen name="login" />
//           <Stack.Screen name="signup" />
//           <Stack.Screen name="products/[productId]" options={{ headerShown: true, title: 'Product Details' }} />
//           <Stack.Screen name="categories/[categoryId]" options={{ headerShown: true, title: 'Category' }}/>
//           <Stack.Screen name="cart" options={{ presentation: 'modal', headerShown: true, title: 'Your Cart' }} />
//           <Stack.Screen name="checkout" options={{ headerShown: false, presentation: 'modal' }} />
//         <Stack.Screen name="admin/manage-products" options={{ headerShown: true, title: 'Manage Products' }} />
//           <Stack.Screen name="admin/product-form" options={{ headerShown: true, title: 'Add/Edit Product' }} />
//           <Stack.Screen name="admin/manage-categories" options={{ headerShown: true, title: 'Manage Categories' }} />
//           <Stack.Screen name="admin/category-form" options={{ headerShown: true, title: 'Add/Edit Category' }} />
//       </Stack>
//   );
// }
import { Stack, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from './lib/AuthContext';
import { CartProvider } from './lib/CartContext';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { CheckoutProvider } from './lib/CheckoutContext'; 
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  // Wrap the entire app in your providers
  return (
    <AuthProvider>
      <CartProvider>
        <CheckoutProvider>
          <MainLayout />
          <Toast />
        </CheckoutProvider>
      </CartProvider>
    </AuthProvider>
  );
}

function MainLayout() {
  const { isAuthenticated, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return; 

    const inAuthPages = segments.length > 0 && (segments[0] === 'login' || segments[0] === 'signup');

    if (isAuthenticated && inAuthPages) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated, isLoading, segments]);

  if (isLoading) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
    );
  }

  // This stack contains all the screens in your app
  return (
      <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen 
            name="login" 
            options={{ 
              presentation: 'modal', 
              headerShown: true, 
              headerTitle: 'Login' 
            }} 
          />
          <Stack.Screen 
            name="signup" 
            options={{ 
              presentation: 'modal', 
              headerShown: true, 
              headerTitle: 'Sign Up' 
            }} 
          />
          <Stack.Screen name="products/[productId]" options={{ headerShown: true, title: 'Product Details' }} />
          <Stack.Screen name="checkout" options={{ headerShown: false, presentation: 'modal' }} />
      </Stack>
  );
}