// import {View, Text}from 'react-native';
// export default  function PaymentScreen(){
//     return(
//         <View>
//             <Text>pyamnet Screen</Text>
//         </View>
//     )
// }
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useCheckout } from '../lib/CheckoutContext';
import { useCart } from '../lib/CartContext';

export default function PaymentScreen() {
  const { shippingAddress } = useCheckout();
  const { items, total } = useCart();

  if (!shippingAddress) {
    return (
      <View style={styles.container}>
        <Text>No shipping address provided.</Text>
      </View>
    );
  }

  const handlePlaceOrder = () => {
    // In a real app, this would call your backend to process the payment
    Alert.alert(
      'Order Placed!',
      `Thank you for your order of $${total.toFixed(2)}.`
    );
  };

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
          <Text key={item.id}>{item.name} x {item.quantity}</Text>
        ))}
        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      </View>

      <Button title="Place Order" onPress={handlePlaceOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  section: { marginBottom: 25, padding: 15, borderWidth: 1, borderColor: '#eee', borderRadius: 8 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 15, color: 'green' },
});