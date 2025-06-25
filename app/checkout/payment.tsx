import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';
import { useCheckout } from '../lib/CheckoutContext';
import { useCart } from '../lib/CartContext';
import apiClient from '../lib/api/apiClient';
import { useRouter } from 'expo-router';

export default function PaymentScreen() {
  const { shippingAddress } = useCheckout();
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!shippingAddress) {
    return (
      <View style={styles.container}>
        <Text>No shipping address provided.</Text>
      </View>
    );
  }

  const handlePlaceOrder = async () => {
    setIsPlacingOrder(true);
    try {
      const orderPayload = {
        shippingAddress: shippingAddress,
        items: items.map(item => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      };

      await apiClient.post('/orders', orderPayload);

      setOrderPlaced(true);
      clearCart();

      // Optionally, auto-redirect after a short delay
      setTimeout(() => {
        router.replace('/(tabs)/profile');
      }, 1200);

    } catch (error) {
      Alert.alert('Order Failed', 'There was a problem placing your order. Please try again.');
      console.error('Order placement error:', error);
    } finally {
      setIsPlacingOrder(false);
    }
  };

  if (orderPlaced) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Order Placed!</Text>
        <Text style={{ fontSize: 18, marginTop: 16 }}>
          Thank you for your order of ${total.toFixed(2)}.
        </Text>
        <Text style={{ marginTop: 24, color: 'gray' }}>
          Redirecting to your profile...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Your Order</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping To:</Text>
        <Text>{shippingAddress.fullName}</Text>
        <Text>{shippingAddress.addressLine1}</Text>
        <Text>{`${shippingAddress.city}, ${shippingAddress.postalCode}`}</Text>
        <Text>{shippingAddress.country}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary:</Text>
        {items.map(item => (
          <Text key={item.product.id}>
            {item.product.name} x {item.quantity}
          </Text>
        ))}
        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      </View>

      {isPlacingOrder ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Place Order" onPress={handlePlaceOrder} disabled={isPlacingOrder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  section: { marginBottom: 25, padding: 15, borderWidth: 1, borderColor: '#eee', borderRadius: 8 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 15, color: 'green' },
});