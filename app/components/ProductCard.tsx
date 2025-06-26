import React from 'react';
import { StyleSheet, Pressable, Image, View, StyleProp, ViewStyle, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Product } from '../lib/types';

interface ProductCardProps {
  product: Product;
  style?: StyleProp<ViewStyle>;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, style }) => {
  // 1. Get the router instance
  const router = useRouter();

  // 2. Create a simple function to handle navigation
  const handlePress = () => {
    router.push(`/products/${product.id}`);
  };

  // 3. Use a standard Pressable component with the onPress handler
  //    This completely avoids the unstable Link/asChild interaction.
  return (
    <Pressable onPress={handlePress} style={({ pressed }) => [styles.card, style, pressed && styles.pressed]}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 8,
    // I've added back a simple, stable border and radius for basic styling.
    // These are cross-platform and will not cause a crash.
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden', // This clips the image to the rounded corners.
  },
  pressed: {
    opacity: 0.8, // Provides visual feedback when the card is pressed.
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  infoContainer: {
    padding: 10,
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});

export default ProductCard;