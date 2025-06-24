// app/checkout/_layout.tsx
import { Stack } from 'expo-router';

export default function CheckoutLayout() {
  return (
    <Stack>
      <Stack.Screen name="shipping" options={{ title: 'Shipping Address' }} />
      <Stack.Screen name="payment" options={{ title: 'Payment Details' }} />
    </Stack>
  );
}