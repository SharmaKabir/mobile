import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native';
import { useCart } from '../lib/CartContext';
import { useRouter } from 'expo-router';
import { useAuth } from '../lib/AuthContext';

export default function CartScreen() {
  const { items, removeFromCart, total, updateQuantity } = useCart();
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleCheckout = () => {
    if (isAuthenticated) {
      // User is logged in, proceed to checkout.
      router.push('/checkout/shipping');
    } else {
      // User is not logged in. Navigate them directly to the login screen.
      // This is more reliable than using Alert.alert on all platforms.
      router.push('/login');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.product.imageUrl }} style={styles.itemImage}/>
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.product.name}</Text>
                <Text style={styles.itemPrice}>${item.product.price.toFixed(2)}</Text>
                <View style={styles.quantityControl}>
                    <TouchableOpacity onPress={() => updateQuantity(item.product.id, -1)} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => updateQuantity(item.product.id, 1)} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.itemActions}>
                <Text style={styles.itemTotal}>${(item.product.price * item.quantity).toFixed(2)}</Text>
                <Button title="Remove" color="#ff3b30" onPress={() => removeFromCart(item.product.id)} />
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
        ListFooterComponent={items.length > 0 ? (
            <View style={styles.footer}>
                <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
                <Button title="Go to Checkout" onPress={handleCheckout} />
            </View>
        ) : null}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  emptyText: { textAlign: 'center', marginTop: 50, fontSize: 18, color: 'gray' },
  itemContainer: { 
    flexDirection: 'row', 
    padding: 15, 
    backgroundColor: 'white',
    borderBottomWidth: 1, 
    borderBottomColor: '#eee', 
    alignItems: 'center' 
  },
  itemImage: { width: 60, height: 60, marginRight: 15, borderRadius: 8 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  itemPrice: { fontSize: 14, color: '#888', marginBottom: 8 },
  quantityControl: { flexDirection: 'row', alignItems: 'center' },
  quantityButton: { 
    width: 30, 
    height: 30, 
    backgroundColor: '#e0e0e0', 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  quantityButtonText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  quantityText: { fontSize: 16, marginHorizontal: 15, fontWeight: '500' },
  itemActions: { alignItems: 'flex-end' },
  itemTotal: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  footer: { 
    padding: 20, 
    borderTopWidth: 1, 
    borderTopColor: '#eee', 
    backgroundColor: 'white',
    marginTop: 10
  },
  total: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'right' },
});