// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function ProfileScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Profile</Text>
//       <Text style={styles.text}>Welcome to your profile!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
//   text: { fontSize: 16 },
// });
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../lib/AuthContext';

export default function ProfileScreen() {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>Welcome to your profile!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={logout} color="#ff3b30" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, marginBottom: 24 },
  buttonContainer: {
    width: '80%',
  }
});