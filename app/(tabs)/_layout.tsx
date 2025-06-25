import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../lib/AuthContext';
import { useEffect } from 'react';

export default function TabLayout() {
  const { user } = useAuth();

  const isAdmin = user?.roles?.some(role => role === 'ROLE_ADMIN');

  // This debug log is still useful to confirm the user's role.
  useEffect(() => {
    console.log("Checking user in layout. Is Admin?", isAdmin, "User:", JSON.stringify(user));
  }, [user, isAdmin]);

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      {/* === Tabs visible to ALL users === */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
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
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={28} color={color} />,
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
        name="profile" // <-- MOVED HERE, NOW VISIBLE TO EVERYONE
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
          // This correctly hides the tab for non-admins
          href: isAdmin ? '/admin' : null,
        }}
      />
    </Tabs>
  );
}