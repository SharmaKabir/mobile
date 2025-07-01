// // // // // // // // // import { Tabs } from 'expo-router';
// // // // // // // // // import { FontAwesome } from '@expo/vector-icons';
// // // // // // // // // import { useAuth } from '../lib/AuthContext';
// // // // // // // // // import { useEffect } from 'react';

// // // // // // // // // export default function TabLayout() {
// // // // // // // // //   const { user } = useAuth();

// // // // // // // // //   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

// // // // // // // // //   // This debug log is still useful to confirm the user's role.
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
// // // // // // // // //   }, [user, isAdmin]);

// // // // // // // // //   return (
// // // // // // // // //     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
// // // // // // // // //       {/* === Tabs visible to ALL users === */}
// // // // // // // // //       <Tabs.Screen
// // // // // // // // //         name="index"
// // // // // // // // //         options={{
// // // // // // // // //           title: 'Shop',
// // // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
// // // // // // // // //         }}
// // // // // // // // //       />
// // // // // // // // //       <Tabs.Screen
// // // // // // // // //         name="search"
// // // // // // // // //         options={{
// // // // // // // // //           title: 'Search',
// // // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
// // // // // // // // //         }}
// // // // // // // // //       />
// // // // // // // // //       <Tabs.Screen
// // // // // // // // //         name="cart"
// // // // // // // // //         options={{
// // // // // // // // //           title: 'Cart',
// // // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
// // // // // // // // //         }}
// // // // // // // // //       />
// // // // // // // // //       <Tabs.Screen
// // // // // // // // //         name="categories"
// // // // // // // // //         options={{
// // // // // // // // //           title: 'Categories',
// // // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
// // // // // // // // //         }}
// // // // // // // // //       />
// // // // // // // // //       <Tabs.Screen
// // // // // // // // //         name="profile" // <-- MOVED HERE, NOW VISIBLE TO EVERYONE
// // // // // // // // //         options={{
// // // // // // // // //           title: 'Profile',
// // // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
// // // // // // // // //         }}
// // // // // // // // //       />

// // // // // // // // //       {/* === Tab visible ONLY to ADMIN users === */}
// // // // // // // // //       <Tabs.Screen
// // // // // // // // //         name="admin"
// // // // // // // // //         options={{
// // // // // // // // //           title: 'Admin',
// // // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
// // // // // // // // //           // This correctly hides the tab for non-admins
// // // // // // // // //           href: isAdmin ? '/admin' : null,
// // // // // // // // //         }}
// // // // // // // // //       />
// // // // // // // // //     </Tabs>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import { FontAwesome } from '@expo/vector-icons';
// // // // // // // // import { Tabs, useRouter } from 'expo-router';
// // // // // // // // import { useAuth } from '../lib/AuthContext';
// // // // // // // // import { useEffect } from 'react';
// // // // // // // // import { Pressable, Text } from 'react-native';
// // // // // // // // import { useColorScheme } from '../../components/useColorScheme';
// // // // // // // // import Colors from '../../constants/Colors';
// // // // // // // // export default function TabLayout() {
// // // // // // // //   const { user, isAuthenticated } = useAuth();
// // // // // // // //   const router = useRouter();
// // // // // // // // const colorScheme = useColorScheme();
// // // // // // // //   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

// // // // // // // //   useEffect(() => {
// // // // // // // //     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
// // // // // // // //   }, [user, isAdmin]);

// // // // // // // //   return (
// // // // // // // //     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
// // // // // // // //       {/* === Tabs visible to ALL users === */}
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="index"
// // // // // // // //         options={{
// // // // // // // //           title: 'Shop',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
// // // // // // // //           headerRight: () => (
// // // // // // // //             !isAuthenticated && (
// // // // // // // //               <Pressable onPress={() => router.push('/login')} style={{ marginRight: 15 }}>
// // // // // // // //                 <Text style={{ color: '#007AFF', fontSize: 16 }}>Login</Text>
// // // // // // // //               </Pressable>
// // // // // // // //             )
// // // // // // // //           ),
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="search"
// // // // // // // //         options={{
// // // // // // // //           title: 'Search',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="cart"
// // // // // // // //         options={{
// // // // // // // //           title: 'Cart',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="categories"
// // // // // // // //         options={{
// // // // // // // //           title: 'Categories',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="profile"
// // // // // // // //         options={{
// // // // // // // //           title: 'Profile',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />

// // // // // // // //       {/* === Tab visible ONLY to ADMIN users === */}
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="admin"
// // // // // // // //         options={{
// // // // // // // //           title: 'Admin',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
// // // // // // // //           href: isAdmin ? '/admin' : null,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //     </Tabs>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // // import { Tabs } from 'expo-router';
// // // // // // // // import { FontAwesome } from '@expo/vector-icons';
// // // // // // // // import { useAuth } from '../lib/AuthContext';
// // // // // // // // import { useEffect } from 'react';

// // // // // // // // export default function TabLayout() {
// // // // // // // //   const { user } = useAuth();

// // // // // // // //   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

// // // // // // // //   // This debug log is still useful to confirm the user's role.
// // // // // // // //   useEffect(() => {
// // // // // // // //     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
// // // // // // // //   }, [user, isAdmin]);

// // // // // // // //   return (
// // // // // // // //     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
// // // // // // // //       {/* === Tabs visible to ALL users === */}
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="index"
// // // // // // // //         options={{
// // // // // // // //           title: 'Shop',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="search"
// // // // // // // //         options={{
// // // // // // // //           title: 'Search',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="cart"
// // // // // // // //         options={{
// // // // // // // //           title: 'Cart',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="categories"
// // // // // // // //         options={{
// // // // // // // //           title: 'Categories',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="profile" // <-- MOVED HERE, NOW VISIBLE TO EVERYONE
// // // // // // // //         options={{
// // // // // // // //           title: 'Profile',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />

// // // // // // // //       {/* === Tab visible ONLY to ADMIN users === */}
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="admin"
// // // // // // // //         options={{
// // // // // // // //           title: 'Admin',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
// // // // // // // //           // This correctly hides the tab for non-admins
// // // // // // // //           href: isAdmin ? '/admin' : null,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //     </Tabs>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import { FontAwesome } from '@expo/vector-icons';
// // // // // // // import { Tabs, useRouter } from 'expo-router';
// // // // // // // import { useAuth } from '../lib/AuthContext';
// // // // // // // import { useEffect } from 'react';
// // // // // // // import { Pressable, Text } from 'react-native';
// // // // // // // import { useColorScheme } from '../../components/useColorScheme';
// // // // // // // import Colors from '../../constants/Colors';
// // // // // // // export default function TabLayout() {
// // // // // // //   const { user, isAuthenticated } = useAuth();
// // // // // // //   const router = useRouter();
// // // // // // // const colorScheme = useColorScheme();
// // // // // // //   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

// // // // // // //   useEffect(() => {
// // // // // // //     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
// // // // // // //   }, [user, isAdmin]);

// // // // // // //   return (
// // // // // // //     <Tabs screenOptions={{ tabBarActiveTintColor: '#E31937' }}>
// // // // // // //       {/* === Tabs visible to ALL users === */}
// // // // // // //       <Tabs.Screen
// // // // // // //         name="index"
// // // // // // //         options={{
// // // // // // //           title: 'Shop',
// // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
// // // // // // //           headerRight: () => (
// // // // // // //             !isAuthenticated && (
// // // // // // //               <Pressable onPress={() => router.push('/login')} style={{ marginRight: 15 }}>
// // // // // // //                 <Text style={{ color: '#007AFF', fontSize: 16 }}>Login</Text>
// // // // // // //               </Pressable>
// // // // // // //             )
// // // // // // //           ),
// // // // // // //         }}
// // // // // // //       />
// // // // // // //       <Tabs.Screen
// // // // // // //         name="search"
// // // // // // //         options={{
// // // // // // //           title: 'Search',
// // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
// // // // // // //         }}
// // // // // // //       />
// // // // // // //       <Tabs.Screen
// // // // // // //         name="cart"
// // // // // // //         options={{
// // // // // // //           title: 'Cart',
// // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
// // // // // // //         }}
// // // // // // //       />
// // // // // // //       <Tabs.Screen
// // // // // // //         name="categories"
// // // // // // //         options={{
// // // // // // //           title: 'Categories',
// // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
// // // // // // //         }}
// // // // // // //       />
// // // // // // //       <Tabs.Screen
// // // // // // //         name="profile"
// // // // // // //         options={{
// // // // // // //           title: 'Profile',
// // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
// // // // // // //         }}
// // // // // // //       />

// // // // // // //       {/* === Tab visible ONLY to ADMIN users === */}
// // // // // // //       <Tabs.Screen
// // // // // // //         name="admin"
// // // // // // //         options={{
// // // // // // //           title: 'Admin',
// // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
// // // // // // //           href: isAdmin ? '/admin' : null,
// // // // // // //         }}
// // // // // // //       />
// // // // // // //     </Tabs>
// // // // // // //   );
// // // // // // // }
// // // // // // // // import { Tabs } from 'expo-router';
// // // // // // // // import { FontAwesome } from '@expo/vector-icons';
// // // // // // // // import { useAuth } from '../lib/AuthContext';
// // // // // // // // import { useEffect } from 'react';

// // // // // // // // export default function TabLayout() {
// // // // // // // //   const { user } = useAuth();

// // // // // // // //   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

// // // // // // // //   // This debug log is still useful to confirm the user's role.
// // // // // // // //   useEffect(() => {
// // // // // // // //     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
// // // // // // // //   }, [user, isAdmin]);

// // // // // // // //   return (
// // // // // // // //     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
// // // // // // // //       {/* === Tabs visible to ALL users === */}
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="index"
// // // // // // // //         options={{
// // // // // // // //           title: 'Shop',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="search"
// // // // // // // //         options={{
// // // // // // // //           title: 'Search',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="cart"
// // // // // // // //         options={{
// // // // // // // //           title: 'Cart',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="categories"
// // // // // // // //         options={{
// // // // // // // //           title: 'Categories',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="profile" // <-- MOVED HERE, NOW VISIBLE TO EVERYONE
// // // // // // // //         options={{
// // // // // // // //           title: 'Profile',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
// // // // // // // //         }}
// // // // // // // //       />

// // // // // // // //       {/* === Tab visible ONLY to ADMIN users === */}
// // // // // // // //       <Tabs.Screen
// // // // // // // //         name="admin"
// // // // // // // //         options={{
// // // // // // // //           title: 'Admin',
// // // // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
// // // // // // // //           // This correctly hides the tab for non-admins
// // // // // // // //           href: isAdmin ? '/admin' : null,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //     </Tabs>
// // // // // // // //   );
// // // // // // // // }
// // // // // // import { FontAwesome } from '@expo/vector-icons';
// // // // // // import { Tabs, useRouter } from 'expo-router';
// // // // // // import { useAuth } from '../lib/AuthContext';
// // // // // // import { useEffect } from 'react';
// // // // // // import { Pressable, Text } from 'react-native';
// // // // // // import { useColorScheme } from '../../components/useColorScheme';
// // // // // // import Colors from '../../constants/Colors';
// // // // // // export default function TabLayout() {
// // // // // //   const { user, isAuthenticated } = useAuth();
// // // // // //   const router = useRouter();
// // // // // // const colorScheme = useColorScheme();
// // // // // //   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

// // // // // //   useEffect(() => {
// // // // // //     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
// // // // // //   }, [user, isAdmin]);

// // // // // //   return (
// // // // // //     <Tabs 
// // // // // //       screenOptions={{ 
// // // // // //         tabBarActiveTintColor: '#E31937',
// // // // // //         tabBarInactiveTintColor: '#000000' 
// // // // // //       }}
// // // // // //     >
// // // // // //       {/* === Tabs visible to ALL users === */}
// // // // // //       <Tabs.Screen
// // // // // //         name="index"
// // // // // //         options={{
// // // // // //           title: 'Shop',
// // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
// // // // // //           headerRight: () => (
// // // // // //             !isAuthenticated && (
// // // // // //              <Pressable 
// // // // // //                 onPress={() => router.push('/login')} 
// // // // // //                 style={({ pressed }) => ({
// // // // // //                   marginRight: 15,
// // // // // //                   backgroundColor: '#E31937',
// // // // // //                   paddingVertical: 8,
// // // // // //                   paddingHorizontal: 16,
// // // // // //                   borderRadius: 20, // High value for a pill shape
// // // // // //                   opacity: pressed ? 0.7 : 1,
// // // // // //                 })}
// // // // // //               >
// // // // // //                 <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
// // // // // //               </Pressable>
// // // // // //             )
// // // // // //           ),
// // // // // //         }}
// // // // // //       />
// // // // // //       <Tabs.Screen
// // // // // //         name="search"
// // // // // //         options={{
// // // // // //           title: 'Search',
// // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
// // // // // //         }}
// // // // // //       />
// // // // // //       <Tabs.Screen
// // // // // //         name="categories"
// // // // // //         options={{
// // // // // //           title: 'Categories',
// // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
// // // // // //         }}
// // // // // //       />
// // // // // //       <Tabs.Screen
// // // // // //         name="cart"
// // // // // //         options={{
// // // // // //           title: 'Cart',
// // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
// // // // // //         }}
// // // // // //       />
      
// // // // // //       <Tabs.Screen
// // // // // //         name="profile"
// // // // // //         options={{
// // // // // //           title: 'Profile',
// // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
// // // // // //         }}
// // // // // //       />

// // // // // //       {/* === Tab visible ONLY to ADMIN users === */}
// // // // // //       <Tabs.Screen
// // // // // //         name="admin"
// // // // // //         options={{
// // // // // //           title: 'Admin',
// // // // // //           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
// // // // // //           href: isAdmin ? '/admin' : null,
// // // // // //         }}
// // // // // //       />
// // // // // //     </Tabs>
// // // // // //   );
// // // // // // }
// // // // // import React from 'react';
// // // // // import FontAwesome from '@expo/vector-icons/FontAwesome';
// // // // // import { Tabs } from 'expo-router';
// // // // // import { useAuth } from '../lib/AuthContext';

// // // // // function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
// // // // //   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// // // // // }

// // // // // export default function TabLayout() {
// // // // //   const { user } = useAuth();

// // // // //   return (
// // // // //     <Tabs
// // // // //       screenOptions={{
// // // // //         tabBarActiveTintColor: '#E31937',
// // // // //         headerShown: true,
// // // // //       }}>
// // // // //       <Tabs.Screen
// // // // //         name="index"
// // // // //         options={{
// // // // //           title: 'Home',
// // // // //           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
// // // // //         }}
// // // // //       />
// // // // //       <Tabs.Screen
// // // // //         name="profile"
// // // // //         options={{
// // // // //           title: user ? 'Profile' : 'Login',
// // // // //           tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
// // // // //         }}
// // // // //       />
// // // // //     </Tabs>
// // // // //   );
// // // // // }
// // // // import FontAwesome from '@expo/vector-icons/FontAwesome';
// // // // import { useFonts } from 'expo-font';
// // // // import { Stack } from 'expo-router';
// // // // import * as SplashScreen from 'expo-splash-screen';
// // // // import { useEffect } from 'react';
// // // // import { AuthProvider } from '../lib/AuthContext'; // Import the provider

// // // // export {
// // // //   // Catch any errors thrown by the Layout component.
// // // //   ErrorBoundary,
// // // // } from 'expo-router';

// // // // export const unstable_settings = {
// // // //   // Ensure that reloading on `/modal` keeps a back button present.
// // // //   initialRouteName: '(tabs)',
// // // // };

// // // // // Prevent the splash screen from auto-hiding before asset loading is complete.
// // // // SplashScreen.preventAutoHideAsync();

// // // // export default function RootLayout() {
// // // //   const [loaded, error] = useFonts({
// // // //     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
// // // //     ...FontAwesome.font,
// // // //   });

// // // //   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
// // // //   useEffect(() => {
// // // //     if (error) throw error;
// // // //   }, [error]);

// // // //   useEffect(() => {
// // // //     if (loaded) {
// // // //       SplashScreen.hideAsync();
// // // //     }
// // // //   }, [loaded]);

// // // //   if (!loaded) {
// // // //     return null;
// // // //   }

// // // //   return <RootLayoutNav />;
// // // // }

// // // // function RootLayoutNav() {
// // // //   return (
// // // //     // Wrap the entire app in the AuthProvider
// // // //     <AuthProvider>
// // // //       <Stack>
// // // //         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
// // // //         <Stack.Screen name="login" options={{ presentation: 'modal', headerTitle: 'Login' }} />
// // // //         <Stack.Screen name="signup" options={{ presentation: 'modal', headerTitle: 'Sign Up' }} />
// // // //       </Stack>
// // // //     </AuthProvider>
// // // //   );
// // // // }
// // // import React from 'react';
// // // import FontAwesome from '@expo/vector-icons/FontAwesome';
// // // import { Tabs } from 'expo-router';
// // // import { useAuth } from '../lib/AuthContext';

// // // function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
// // //   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// // // }

// // // export default function TabLayout() {
// // //   const { user } = useAuth();

// // //   return (
// // //     <Tabs
// // //       screenOptions={{
// // //         tabBarActiveTintColor: '#E31937',
// // //         headerShown: true,
// // //       }}>
// // //       <Tabs.Screen
// // //         name="index"
// // //         options={{
// // //           title: 'Home',
// // //           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="profile"
// // //         options={{
// // //           title: user ? 'Profile' : 'Login',
// // //           tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
// // //         }}
// // //         />
// // //         </Tabs>
// // //   );
// // // }
// // import React from 'react';
// // import FontAwesome from '@expo/vector-icons/FontAwesome';
// // import { Tabs, useRouter } from 'expo-router'; // Import useRouter
// // import { useAuth } from '../lib/AuthContext';
// // import { Pressable, Text } from 'react-native'; // Import Pressable and Text

// // function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
// //   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// // }

// // export default function TabLayout() {
// //   const { user, isAuthenticated } = useAuth(); // Get isAuthenticated state
// //   const router = useRouter(); // Get router instance

// //   return (
// //     <Tabs
// //       screenOptions={{
// //         tabBarActiveTintColor: '#808080', // Keep the grey theme
// //         headerShown: true,
// //       }}>
// //       <Tabs.Screen
// //         name="index"
// //         options={{
// //           title: 'Home',
// //           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
// //           // --- ADD THIS SECTION ---
// //           headerRight: () => (
// //             !isAuthenticated && (
// //              <Pressable 
// //                 onPress={() => router.push('/login')} 
// //                 style={({ pressed }) => ({
// //                   marginRight: 15,
// //                   backgroundColor: '#808080', // Grey button
// //                   paddingVertical: 8,
// //                   paddingHorizontal: 16,
// //                   borderRadius: 20,
// //                   opacity: pressed ? 0.7 : 1,
// //                 })}
// //               >
// //                 <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
// //               </Pressable>
// //             )
// //           ),
// //           // --- END OF SECTION ---
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="profile"
// //         options={{
// //           title: user ? '' : '',
// //           tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
// //         }}
// //         />
// //         </Tabs>
// //   );
// // }

// import React from 'react';
// import { FontAwesome, Ionicons } from '@expo/vector-icons'; // Import Ionicons
// import { Tabs, useRouter } from 'expo-router';
// import { useAuth } from '../lib/AuthContext';
// import { Pressable, Text } from 'react-native';

// // This function for the bottom tab bar can remain as FontAwesome
// function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const { user, isAuthenticated } = useAuth();
//   const router = useRouter();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: '#808080',
//         headerShown: true,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: '',
//           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
//           headerRight: () => (
//             !isAuthenticated && (
//              <Pressable 
//                 onPress={() => router.push('/login')} 
//                 style={({ pressed }) => ({
//                   marginRight: 15,
//                   backgroundColor: '#808080',
//                   paddingVertical: 8,
//                   paddingHorizontal: 16,
//                   borderRadius: 20,
//                   opacity: pressed ? 0.7 : 1,
//                 })}
//               >
//                 <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
//               </Pressable>
//             )
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: user ? '' : '',
//           tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
//           // --- UPDATED SECTION ---
//           headerLeft: () => (
//             !isAuthenticated && (
//               <Pressable onPress={() => router.push('/(tabs)')} style={{ marginLeft: 15 }}>
//                 {/* Use Ionicons for a standard, plain back arrow */}
//                 <Ionicons name="arrow-back" size={24} color="#000000" />
//               </Pressable>
//             )
//           ),
//           // --- END OF SECTION ---
//         }}
//         />
//           <Tabs.Screen
//             name="cart"
//             options={{
//                 title: 'Your Cart',
//                 headerShown: true,
//                 // Hides this screen from the tab bar
//                 href: null,
//             }}
//         />
//         </Tabs>
        
//   );
// }
import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { useAuth } from '../lib/AuthContext';
import { Pressable, Text, View } from 'react-native'; // Import View

// This function for the bottom tab bar can remain as FontAwesome
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#808080',
        headerShown: true,
      }}>
       <Tabs.Screen
        name="index"
        options={{
          title: '', // This keeps the center title empty
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // --- ADD THIS SECTION FOR THE LEFT SIDE ---
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>
                Shop App
              </Text>
            </View>
          ),
          // --- UPDATE THIS SECTION FOR THE RIGHT SIDE ---
          headerRight: () => (
            <View style={{ marginRight: 15 }}>
              {!isAuthenticated && (
                <Pressable 
                  onPress={() => router.push('/login')} 
                  style={({ pressed }) => ({
                    backgroundColor: '#808080',
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 20,
                    opacity: pressed ? 0.7 : 1,
                  })}
                >
                  <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
                </Pressable>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: user ? 'Profile' : 'Login',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerLeft: () => (
            !isAuthenticated && (
              <Pressable onPress={() => router.push('/(tabs)')} style={{ marginLeft: 15 }}>
                <Ionicons name="arrow-back" size={24} color="#000000" />
              </Pressable>
            )
          ),
        }}
        />
          <Tabs.Screen
            name="cart"
            options={{
                title: 'Your Cart',
                headerShown: true,
                href: null,
            }}
        />
        </Tabs>
        
  );
}