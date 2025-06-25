// // (tabs)/cart.tsx
// import React from 'react';
// import { View, Text, FlatList, StyleSheet, Button, Image } from 'react-native';
// import { useCart } from '../lib/CartContext';
// import { useRouter } from 'expo-router';

// export default function CartScreen() {
//   const { items } = useCart();
//   const router = useRouter();

//   const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={items}
//         keyExtractor={(item) => item.product.id}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Image source={{ uri: item.product.imageUrl }} style={styles.itemImage}/>
//             <View style={styles.itemDetails}>
//                 <Text style={styles.itemName}>{item.product.name}</Text>
//                 <Text>Quantity: {item.quantity}</Text>
//             </View>
//             <Text style={styles.itemPrice}>${(item.product.price * item.quantity).toFixed(2)}</Text>
//           </View>
//         )}
//         ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
//         ListFooterComponent={items.length > 0 ? (
//             <View style={styles.footer}>
//                 <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
//                 <Button title="Go to Checkout" onPress={() => router.push('/checkout/shipping')} />
//             </View>
//         ) : null}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
//   emptyText: { textAlign: 'center', marginTop: 50, fontSize: 18 },
//   itemContainer: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center' },
//   itemImage: { width: 50, height: 50, marginRight: 10 },
//   itemDetails: { flex: 1 },
//   itemName: { fontSize: 16, fontWeight: 'bold' },
//   itemPrice: { fontSize: 16, fontWeight: 'bold' },
//   footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#eee' },
//   total: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'right' },
// });

import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Image } from 'react-native';
import { useCart } from '../lib/CartContext';
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const { items, removeFromCart } = useCart();
  const router = useRouter();

  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.product.imageUrl }} style={styles.itemImage}/>
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.product.name}</Text>
                <Text>Quantity: {item.quantity}</Text>
            </View>
            <Text style={styles.itemPrice}>${(item.product.price * item.quantity).toFixed(2)}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.product.id)} />
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
        ListFooterComponent={items.length > 0 ? (
            <View style={styles.footer}>
                <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
                <Button title="Go to Checkout" onPress={() => router.push('/checkout/shipping')} />
            </View>
        ) : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  emptyText: { textAlign: 'center', marginTop: 50, fontSize: 18 },
  itemContainer: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center' },
  itemImage: { width: 50, height: 50, marginRight: 10 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  itemPrice: { fontSize: 16, fontWeight: 'bold', marginRight: 10 },
  footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#eee' },
  total: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'right' },
});