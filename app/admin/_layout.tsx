import { Stack } from 'expo-router';

export default function AdminLayout() {
  return (
    <Stack>
      <Stack.Screen name="orders" options={{ title: 'All Orders' }} />
      <Stack.Screen name="manage-products" options={{ title: 'Manage Products' }} />
      <Stack.Screen name="product-form" options={{ title: 'Add/Edit Product', presentation: 'modal' }} />
    </Stack>
  );
}