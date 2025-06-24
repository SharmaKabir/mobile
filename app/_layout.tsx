// app/_layout.tsx
import { Stack } from 'expo-router';
import { CartProvider } from './lib/CartContext';

export default function RootLayout() {
  // Simple auth check could be done here with another context
  // For now, we wrap the app in the CartProvider
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* The (tabs) layout is rendered by default */}
        <Stack.Screen name="(tabs)" />
        {/* Define other screens outside the tab bar here */}
        <Stack.Screen name="login" options={{ presentation: 'modal' }} />
        <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
        <Stack.Screen name="products/[productId]" options={{ headerShown: true, title: 'Product Details' }} />
        <Stack.Screen name="categories/[categoryId]" options={{ headerShown: true, title: 'Category' }}/>
        <Stack.Screen name="cart" options={{ presentation: 'modal', headerShown: true, title: 'Your Cart' }} />
      </Stack>
    </CartProvider>
  );
}