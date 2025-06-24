import { Stack } from 'expo-router';

export default function AuthLayout() {
  // This layout will have no header
  return <Stack screenOptions={{ headerShown: false }} />;
}