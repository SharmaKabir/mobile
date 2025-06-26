// import { Stack } from 'expo-router';

// export default function AuthLayout() {
//   // This layout will have no header
//   return <Stack screenOptions={{ headerShown: false }} />;
// }
import { Stack, useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AuthLayout() {
  const router = useRouter();

  // This function creates a pressable back arrow component.
  const renderHeaderLeft = () => (
    <Pressable 
      onPress={() => router.push('/(tabs)')} 
      style={({ pressed }) => ({ marginLeft: 15, opacity: pressed ? 0.5 : 1 })}
    >
      <FontAwesome name="arrow-left" size={24} color="#000" />
    </Pressable>
  );

  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          headerTitle: 'Login',
          headerLeft: renderHeaderLeft,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerTitle: 'Create Account',
          headerLeft: renderHeaderLeft,
        }}
      />
    </Stack>
  );
}