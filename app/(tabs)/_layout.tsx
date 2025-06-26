// // // import { Tabs } from 'expo-router';
// // // import { FontAwesome } from '@expo/vector-icons';
// // // import { useAuth } from '../lib/AuthContext';
// // // import { useEffect } from 'react';

// // // export default function TabLayout() {
// // //   const { user } = useAuth();

// // //   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

// // //   // This debug log is still useful to confirm the user's role.
// // //   useEffect(() => {
// // //     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
// // //   }, [user, isAdmin]);

// // //   return (
// // //     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
// // //       {/* === Tabs visible to ALL users === */}
// // //       <Tabs.Screen
// // //         name="index"
// // //         options={{
// // //           title: 'Shop',
// // //           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="search"
// // //         options={{
// // //           title: 'Search',
// // //           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="cart"
// // //         options={{
// // //           title: 'Cart',
// // //           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="categories"
// // //         options={{
// // //           title: 'Categories',
// // //           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="profile" // <-- MOVED HERE, NOW VISIBLE TO EVERYONE
// // //         options={{
// // //           title: 'Profile',
// // //           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
// // //         }}
// // //       />

// // //       {/* === Tab visible ONLY to ADMIN users === */}
// // //       <Tabs.Screen
// // //         name="admin"
// // //         options={{
// // //           title: 'Admin',
// // //           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
// // //           // This correctly hides the tab for non-admins
// // //           href: isAdmin ? '/admin' : null,
// // //         }}
// // //       />
// // //     </Tabs>
// // //   );
// // // }
// // import { FontAwesome } from '@expo/vector-icons';
// // import { Tabs, useRouter } from 'expo-router';
// // import { useAuth } from '../lib/AuthContext';
// // import { useEffect } from 'react';
// // import { Pressable, Text } from 'react-native';
// // import { useColorScheme } from '../../components/useColorScheme';
// // import Colors from '../../constants/Colors';
// // export default function TabLayout() {
// //   const { user, isAuthenticated } = useAuth();
// //   const router = useRouter();
// // const colorScheme = useColorScheme();
// //   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

// //   useEffect(() => {
// //     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
// //   }, [user, isAdmin]);

// //   return (
// //     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
// //       {/* === Tabs visible to ALL users === */}
// //       <Tabs.Screen
// //         name="index"
// //         options={{
// //           title: 'Shop',
// //           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
// //           headerRight: () => (
// //             !isAuthenticated && (
// //               <Pressable onPress={() => router.push('/login')} style={{ marginRight: 15 }}>
// //                 <Text style={{ color: '#007AFF', fontSize: 16 }}>Login</Text>
// //               </Pressable>
// //             )
// //           ),
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="search"
// //         options={{
// //           title: 'Search',
// //           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="cart"
// //         options={{
// //           title: 'Cart',
// //           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="categories"
// //         options={{
// //           title: 'Categories',
// //           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="profile"
// //         options={{
// //           title: 'Profile',
// //           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
// //         }}
// //       />

// //       {/* === Tab visible ONLY to ADMIN users === */}
// //       <Tabs.Screen
// //         name="admin"
// //         options={{
// //           title: 'Admin',
// //           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
// //           href: isAdmin ? '/admin' : null,
// //         }}
// //       />
// //     </Tabs>
// //   );
// // }
// // import { Tabs } from 'expo-router';
// // import { FontAwesome } from '@expo/vector-icons';
// // import { useAuth } from '../lib/AuthContext';
// // import { useEffect } from 'react';

// // export default function TabLayout() {
// //   const { user } = useAuth();

// //   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

// //   // This debug log is still useful to confirm the user's role.
// //   useEffect(() => {
// //     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
// //   }, [user, isAdmin]);

// //   return (
// //     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
// //       {/* === Tabs visible to ALL users === */}
// //       <Tabs.Screen
// //         name="index"
// //         options={{
// //           title: 'Shop',
// //           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="search"
// //         options={{
// //           title: 'Search',
// //           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="cart"
// //         options={{
// //           title: 'Cart',
// //           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="categories"
// //         options={{
// //           title: 'Categories',
// //           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="profile" // <-- MOVED HERE, NOW VISIBLE TO EVERYONE
// //         options={{
// //           title: 'Profile',
// //           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
// //         }}
// //       />

// //       {/* === Tab visible ONLY to ADMIN users === */}
// //       <Tabs.Screen
// //         name="admin"
// //         options={{
// //           title: 'Admin',
// //           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
// //           // This correctly hides the tab for non-admins
// //           href: isAdmin ? '/admin' : null,
// //         }}
// //       />
// //     </Tabs>
// //   );
// // }
// import { FontAwesome } from '@expo/vector-icons';
// import { Tabs, useRouter } from 'expo-router';
// import { useAuth } from '../lib/AuthContext';
// import { useEffect } from 'react';
// import { Pressable, Text } from 'react-native';
// import { useColorScheme } from '../../components/useColorScheme';
// import Colors from '../../constants/Colors';
// export default function TabLayout() {
//   const { user, isAuthenticated } = useAuth();
//   const router = useRouter();
// const colorScheme = useColorScheme();
//   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

//   useEffect(() => {
//     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
//   }, [user, isAdmin]);

//   return (
//     <Tabs screenOptions={{ tabBarActiveTintColor: '#E31937' }}>
//       {/* === Tabs visible to ALL users === */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Shop',
//           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
//           headerRight: () => (
//             !isAuthenticated && (
//               <Pressable onPress={() => router.push('/login')} style={{ marginRight: 15 }}>
//                 <Text style={{ color: '#007AFF', fontSize: 16 }}>Login</Text>
//               </Pressable>
//             )
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="search"
//         options={{
//           title: 'Search',
//           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="cart"
//         options={{
//           title: 'Cart',
//           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="categories"
//         options={{
//           title: 'Categories',
//           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
//         }}
//       />

//       {/* === Tab visible ONLY to ADMIN users === */}
//       <Tabs.Screen
//         name="admin"
//         options={{
//           title: 'Admin',
//           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
//           href: isAdmin ? '/admin' : null,
//         }}
//       />
//     </Tabs>
//   );
// }
// // import { Tabs } from 'expo-router';
// // import { FontAwesome } from '@expo/vector-icons';
// // import { useAuth } from '../lib/AuthContext';
// // import { useEffect } from 'react';

// // export default function TabLayout() {
// //   const { user } = useAuth();

// //   const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

// //   // This debug log is still useful to confirm the user's role.
// //   useEffect(() => {
// //     console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
// //   }, [user, isAdmin]);

// //   return (
// //     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
// //       {/* === Tabs visible to ALL users === */}
// //       <Tabs.Screen
// //         name="index"
// //         options={{
// //           title: 'Shop',
// //           tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="search"
// //         options={{
// //           title: 'Search',
// //           tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="cart"
// //         options={{
// //           title: 'Cart',
// //           tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="categories"
// //         options={{
// //           title: 'Categories',
// //           tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="profile" // <-- MOVED HERE, NOW VISIBLE TO EVERYONE
// //         options={{
// //           title: 'Profile',
// //           tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
// //         }}
// //       />

// //       {/* === Tab visible ONLY to ADMIN users === */}
// //       <Tabs.Screen
// //         name="admin"
// //         options={{
// //           title: 'Admin',
// //           tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
// //           // This correctly hides the tab for non-admins
// //           href: isAdmin ? '/admin' : null,
// //         }}
// //       />
// //     </Tabs>
// //   );
// // }
import { FontAwesome } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { useAuth } from '../lib/AuthContext';
import { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { useColorScheme } from '../../components/useColorScheme';
import Colors from '../../constants/Colors';
export default function TabLayout() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
const colorScheme = useColorScheme();
  const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

  useEffect(() => {
    console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
  }, [user, isAdmin]);

  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: '#E31937',
        tabBarInactiveTintColor: '#000000' 
      }}
    >
      {/* === Tabs visible to ALL users === */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
          headerRight: () => (
            !isAuthenticated && (
             <Pressable 
                onPress={() => router.push('/login')} 
                style={({ pressed }) => ({
                  marginRight: 15,
                  backgroundColor: '#E31937',
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 20, // High value for a pill shape
                  opacity: pressed ? 0.7 : 1,
                })}
              >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
              </Pressable>
            )
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color }) => <FontAwesome name="th-list" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
        }}
      />

      {/* === Tab visible ONLY to ADMIN users === */}
      <Tabs.Screen
        name="admin"
        options={{
          title: 'Admin',
          tabBarIcon: ({ color }) => <FontAwesome name="cogs" size={28} color={color} />,
          href: isAdmin ? '/admin' : null,
        }}
      />
    </Tabs>
  );
}