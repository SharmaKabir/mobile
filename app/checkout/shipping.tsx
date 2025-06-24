// import {View, Text}from 'react-native';
// export default  function ShippingScreen(){
//     return(
//         <View>
//             <Text>sHIPPINGS Screen</Text>
//         </View>
//     )
// }
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useCheckout } from '../lib/CheckoutContext';

export default function ShippingScreen() {
  const { saveShippingAddress } = useCheckout();

  const [fullName, setFullName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const handleContinueToPayment = () => {
    if (!fullName || !addressLine1 || !city || !postalCode || !country) {
      Alert.alert('Missing Information', 'Please fill out all fields.');
      return;
    }

    const address = { fullName, addressLine1, city, postalCode, country };
    saveShippingAddress(address);
    router.push('/checkout/payment');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Shipping Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Address Line 1"
        value={addressLine1}
        onChangeText={setAddressLine1}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Postal Code"
        value={postalCode}
        onChangeText={setPostalCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Continue to Payment" onPress={handleContinueToPayment} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
});