// // import React, { createContext, useState, useContext, PropsWithChildren, useMemo, useEffect } from 'react';
// // import { Alert, Platform, ToastAndroid } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { CartItem, Product } from './types';
// // import { useAuth } from './AuthContext';
// // import Toast from 'react-native-toast-message';
// // interface CartContextType {
// //   items: CartItem[];
// //   addToCart: (product: Product) => void;
// //   updateQuantity: (productId: string, amount: number) => void;
// //   removeFromCart: (productId: string) => void;
// //   total: number;
// //   clearCart: () => void;
// //   isCartLoaded: boolean;
// // }

// // const CartContext = createContext<CartContextType | undefined>(undefined);

// // // A helper function to show notifications that works on all platforms
// // // const showNotification = (title: string, message: string) => {
// // //   console.log(`${title}: ${message}`); // Always log for debugging
  
// // //   if (Platform.OS === 'android') {
// // //     // On Android, Toast is more reliable than Alert in some cases
// // //     ToastAndroid.show(message, ToastAndroid.SHORT);
// // //   } else {
// // //     // On iOS and other platforms, use Alert
// // //     Alert.alert(title, message);
// // //   }
// // // };

// // // const showNotification = (title: string, message: string) => {
// // //   console.log(`${title}: ${message}`); // Always log for debugging
// // //   Alert.alert(title, message);
// // // };
// // const showNotification = (title: string, message: string) => {
// //   console.log('showNotification called:', title, message);
// //   if (Platform.OS === 'web') {
// //     window.alert(`${title}: ${message}`);
// //   } else {
// //     Alert.alert(title, message);
// //   }
// // };

// // export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
// //   const { user } = useAuth();
// //   const [items, setItems] = useState<CartItem[]>([]);

// //   // Load cart from AsyncStorage when user changes
// //    const removeFromCart = (productId: string) => {
// //     setItems(prevItems => prevItems.filter(item => item.product.id !== productId));
// //     // Optionally show a notification
// //     showNotification('Removed', 'Item removed from cart.');
// //   };
// //   useEffect(() => {
// //     const loadCart = async () => {
// //       try {
// //         if (user?.email) {
// //           console.log('Loading cart for user:', user.email);
// //           const data = await AsyncStorage.getItem(`cart_${user.email}`);
// //           if (data) {
// //             setItems(JSON.parse(data));
// //             console.log('Cart loaded successfully');
// //           } else {
// //             setItems([]);
// //             console.log('No existing cart found, using empty cart');
// //           }
// //         } else {
// //           // Clear cart when no user is logged in
// //           setItems([]);
// //           console.log('No user logged in, using empty cart');
// //         }
// //       } catch (error) {
// //         console.error('Error loading cart:', error);
// //         setItems([]);
// //       }
// //     };

// //     loadCart();
// //   }, [user?.email]);

// //   // Save cart to AsyncStorage whenever items or user changes
// //   useEffect(() => {
// //     const saveCart = async () => {
// //       try {
// //         if (user?.email) {
// //           console.log('Saving cart for user:', user.email, 'Items:', items.length);
// //           await AsyncStorage.setItem(`cart_${user.email}`, JSON.stringify(items));
// //         }
// //       } catch (error) {
// //         console.error('Error saving cart:', error);
// //       }
// //     };

// //     saveCart();
// //   }, [items, user?.email]);

// //   // const addToCart = (product: Product) => {
// //   //   // Ensure user is logged in before adding to cart
// //   //   if (!user?.email) {
// //   //     showNotification('Login Required', 'Please log in to add items to your cart.');
// //   //     return;
// //   //   }

// //   //   const existingItem = items.find(item => item.product.id === product.id);
    
// //   //   if (existingItem) {
// //   //     // Item already exists, increment quantity
// //   //     showNotification('Cart Updated', `${product.name} quantity increased.`);
      
// //   //     setItems(prevItems => 
// //   //       prevItems.map(item =>
// //   //         item.product.id === product.id 
// //   //           ? { ...item, quantity: item.quantity + 1 } 
// //   //           : item
// //   //       )
// //   //     );
// //   //   } else {
// //   //     // New item, add to cart
// //   //     showNotification('Added to Cart', `${product.name} added to cart!`);
      
// //   //     setItems(prevItems => [...prevItems, { product, quantity: 1 }]);
// //   //   }
// //   // };
// //   const addToCart = (product: Product) => {
// //   console.log('addToCart called for:', product.name);

// //   if (!user?.email) {
// //     console.log('User not logged in!');
// //     showNotification('Login Required', 'Please log in to add items to your cart.');
// //     return;
// //   }

// //   const existingItem = items.find(item => item.product.id === product.id);

// //   if (existingItem) {
// //     console.log('Product already in cart, increasing quantity.');
// //     showNotification('Cart Updated', `${product.name} quantity increased.`);
// //     setItems(prevItems =>
// //       prevItems.map(item =>
// //         item.product.id === product.id
// //           ? { ...item, quantity: item.quantity + 1 }
// //           : item
// //       )
// //     );
// //   } else {
// //     console.log('Product not in cart, adding new.');
// //     showNotification('Added to Cart', `${product.name} added to cart!`);
// //     setItems(prevItems => [...prevItems, { product, quantity: 1 }]);
// //   }
// // };

// //   const updateQuantity = (productId: string, amount: number) => {
// //     setItems(prevItems =>
// //       prevItems
// //         .map(item =>
// //           item.product.id === productId
// //             ? { ...item, quantity: item.quantity + amount }
// //             : item
// //         )
// //         .filter(item => item.quantity > 0)
// //     );
// //   };

// //   const clearCart = () => {
// //     console.log('Clearing cart');
// //     setItems([]);
// //     // Also remove from AsyncStorage for the current user
// //     if (user?.email) {
// //       AsyncStorage.removeItem(`cart_${user.email}`);
// //     }
// //   };

// //   const total = useMemo(
// //     () => items.reduce((sum, item) => sum + (item.product.price || 0) * item.quantity, 0),
// //     [items]
// //   );

// //   return (
// //     // <CartContext.Provider value={{ items, addToCart, updateQuantity, total, clearCart }}>
// //     //   {children}
// //     // </CartContext.Provider>
// //     <CartContext.Provider value={{ items, addToCart, updateQuantity, removeFromCart, total, clearCart }}>
// //     {children}
// //   </CartContext.Provider>
// //   );
// // };

// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (context === undefined) {
// //     throw new Error('useCart must be used within a CartProvider');
// //   }
// //   return context;
// // };
// import React, { createContext, useState, useContext, useEffect, useMemo, PropsWithChildren } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Product } from './types';
// import { useAuth } from './AuthContext';
// import Toast from 'react-native-toast-message';

// interface CartItem {
//   product: Product;
//   quantity: number;
// }

// interface CartContextType {
//   items: CartItem[];
//   addToCart: (product: Product) => void;
//   updateQuantity: (productId: string, amount: number) => void;
//   removeFromCart: (productId: string) => void;
//   total: number;
//   clearCart: () => void;
//   isCartLoaded: boolean;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
//   const { user, isAuthenticated } = useAuth();
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [isCartLoaded, setIsCartLoaded] = useState(false);

//   // Effect to load, save, and merge the cart based on authentication state
//   useEffect(() => {
//     const handleCartState = async () => {
//       setIsCartLoaded(false);
//       try {
//         if (isAuthenticated && user?.email) {
//           // User is logged in. Check for an anonymous cart to merge.
//           const anonymousCartJson = await AsyncStorage.getItem('cart_anonymous');
//           const userCartJson = await AsyncStorage.getItem(`cart_${user.email}`);
          
//           const anonymousItems: CartItem[] = anonymousCartJson ? JSON.parse(anonymousCartJson) : [];
//           const userItems: CartItem[] = userCartJson ? JSON.parse(userCartJson) : [];

//           if (anonymousItems.length > 0) {
//             // Merge anonymous cart into the user's cart
//             const mergedItems = [...userItems];
//             anonymousItems.forEach(anonItem => {
//               const existingItemIndex = mergedItems.findIndex(
//                 userItem => userItem.product.id === anonItem.product.id
//               );
//               if (existingItemIndex > -1) {
//                 // If item exists, add quantities
//                 mergedItems[existingItemIndex].quantity += anonItem.quantity;
//               } else {
//                 // If item is new, add it to the cart
//                 mergedItems.push(anonItem);
//               }
//             });
//             setItems(mergedItems);
//             await AsyncStorage.setItem(`cart_${user.email}`, JSON.stringify(mergedItems));
//             await AsyncStorage.removeItem('cart_anonymous'); // Clean up anonymous cart
//             Toast.show({ type: 'success', text1: 'Cart Merged', text2: 'Your items have been added to your account.' });
//           } else {
//             // No anonymous cart to merge, just load the user's cart
//             setItems(userItems);
//           }
//         } else {
//           // User is not logged in, load the anonymous cart.
//           const anonymousCartJson = await AsyncStorage.getItem('cart_anonymous');
//           setItems(anonymousCartJson ? JSON.parse(anonymousCartJson) : []);
//         }
//       } catch (error) {
//         console.error("Failed to handle cart state", error);
//         setItems([]); // Reset to empty on error
//       } finally {
//         setIsCartLoaded(true);
//       }
//     };

//     handleCartState();
//   }, [isAuthenticated, user?.email]);

//   // Effect to save the cart to storage whenever it changes
//   useEffect(() => {
//     // Only save after the initial load is complete
//     if (!isCartLoaded) return;

//     const saveCart = async () => {
//       try {
//         const cartKey = isAuthenticated && user?.email ? `cart_${user.email}` : 'cart_anonymous';
//         await AsyncStorage.setItem(cartKey, JSON.stringify(items));
//       } catch (error) {
//         console.error("Failed to save cart to storage", error);
//       }
//     };
//     saveCart();
//   }, [items, isCartLoaded, isAuthenticated, user?.email]);

//   const addToCart = (product: Product) => {
//     const existingItem = items.find(item => item.product.id === product.id);
    
//     if (existingItem) {
//       setItems(prevItems => 
//         prevItems.map(item =>
//           item.product.id === product.id 
//             ? { ...item, quantity: item.quantity + 1 } 
//             : item
//         )
//       );
//       Toast.show({ type: 'info', text1: 'Cart Updated', text2: `${product.name} quantity increased.` });
//     } else {
//       setItems(prevItems => [...prevItems, { product, quantity: 1 }]);
//       Toast.show({ type: 'success', text1: 'Added to Cart', text2: `${product.name} has been added.` });
//     }
//   };

//   const removeFromCart = (productId: string) => {
//     setItems(prevItems => prevItems.filter(item => item.product.id !== productId));
//     Toast.show({ type: 'info', text1: 'Item Removed' });
//   };

//   const updateQuantity = (productId: string, amount: number) => {
//     setItems(prevItems =>
//       prevItems
//         .map(item =>
//           item.product.id === productId
//             ? { ...item, quantity: item.quantity + amount }
//             : item
//         )
//         .filter(item => item.quantity > 0) // Remove item if quantity is 0 or less
//     );
//   };

//   const clearCart = () => {
//     const cartKey = isAuthenticated && user?.email ? `cart_${user.email}` : 'cart_anonymous';
//     setItems([]);
//     AsyncStorage.removeItem(cartKey);
//   };

//   const total = useMemo(
//     () => items.reduce((sum, item) => sum + (item.product.price || 0) * item.quantity, 0),
//     [items]
//   );

//   return (
//     <CartContext.Provider value={{ items, addToCart, updateQuantity, removeFromCart, total, clearCart, isCartLoaded }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };
import React, { createContext, useState, useContext, useEffect, useMemo, PropsWithChildren } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from './types';
import { useAuth } from './AuthContext';
import Toast from 'react-native-toast-message';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, amount: number) => void; // CHANGED
  removeFromCart: (productId: number) => void; // CHANGED
  total: number;
  clearCart: () => void;
  isCartLoaded: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const { user, isAuthenticated } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  // Effect to load, save, and merge the cart based on authentication state
  useEffect(() => {
    const handleCartState = async () => {
      setIsCartLoaded(false);
      try {
        if (isAuthenticated && user?.email) {
          // User is logged in. Check for an anonymous cart to merge.
          const anonymousCartJson = await AsyncStorage.getItem('cart_anonymous');
          const userCartJson = await AsyncStorage.getItem(`cart_${user.email}`);
          
          const anonymousItems: CartItem[] = anonymousCartJson ? JSON.parse(anonymousCartJson) : [];
          const userItems: CartItem[] = userCartJson ? JSON.parse(userCartJson) : [];

          if (anonymousItems.length > 0) {
            // Merge anonymous cart into the user's cart
            const mergedItems = [...userItems];
            anonymousItems.forEach(anonItem => {
              const existingItemIndex = mergedItems.findIndex(
                userItem => userItem.product.id === anonItem.product.id
              );
              if (existingItemIndex > -1) {
                // If item exists, add quantities
                mergedItems[existingItemIndex].quantity += anonItem.quantity;
              } else {
                // If item is new, add it to the cart
                mergedItems.push(anonItem);
              }
            });
            setItems(mergedItems);
            await AsyncStorage.setItem(`cart_${user.email}`, JSON.stringify(mergedItems));
            await AsyncStorage.removeItem('cart_anonymous'); // Clean up anonymous cart
            Toast.show({ type: 'success', text1: 'Cart Merged', text2: 'Your items have been added to your account.' });
          } else {
            // No anonymous cart to merge, just load the user's cart
            setItems(userItems);
          }
        } else {
          // User is not logged in, load the anonymous cart.
          const anonymousCartJson = await AsyncStorage.getItem('cart_anonymous');
          setItems(anonymousCartJson ? JSON.parse(anonymousCartJson) : []);
        }
      } catch (error) {
        console.error("Failed to handle cart state", error);
        setItems([]); // Reset to empty on error
      } finally {
        setIsCartLoaded(true);
      }
    };

    handleCartState();
  }, [isAuthenticated, user?.email]);

  // Effect to save the cart to storage whenever it changes
  useEffect(() => {
    if (!isCartLoaded) return;

    const saveCart = async () => {
      try {
        const cartKey = isAuthenticated && user?.email ? `cart_${user.email}` : 'cart_anonymous';
        await AsyncStorage.setItem(cartKey, JSON.stringify(items));
      } catch (error) {
        console.error("Failed to save cart to storage", error);
      }
    };
    saveCart();
  }, [items, isCartLoaded, isAuthenticated, user?.email]);

  const addToCart = (product: Product) => {
    const existingItem = items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      setItems(prevItems => 
        prevItems.map(item =>
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      );
      Toast.show({ type: 'info', text1: 'Cart Updated', text2: `${product.name} quantity increased.` });
    } else {
      setItems(prevItems => [...prevItems, { product, quantity: 1 }]);
      Toast.show({ type: 'success', text1: 'Added to Cart', text2: `${product.name} has been added.` });
    }
  };

  const removeFromCart = (productId: number) => { // CHANGED
    setItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    Toast.show({ type: 'info', text1: 'Item Removed' });
  };

  const updateQuantity = (productId: number, amount: number) => { // CHANGED
    setItems(prevItems =>
      prevItems
        .map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter(item => item.quantity > 0) // Remove item if quantity is 0 or less
    );
  };

  const clearCart = () => {
    const cartKey = isAuthenticated && user?.email ? `cart_${user.email}` : 'cart_anonymous';
    setItems([]);
    AsyncStorage.removeItem(cartKey);
  };

  const total = useMemo(
    () => items.reduce((sum, item) => sum + (item.product.price || 0) * item.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider value={{ items, addToCart, updateQuantity, removeFromCart, total, clearCart, isCartLoaded }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};