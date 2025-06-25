import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import apiClient from '../lib/api/apiClient';
import { useFocusEffect } from 'expo-router';

interface Order {
  id: number;
  user: {
    email: string;
  };
  orderDate: string;
  totalAmount: number;
  status: string;
}

export default function AllOrdersScreen() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await apiClient.get('/admin/orders');
      setOrders(response.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setLoading(false);
    }
  };

  // useFocusEffect will refetch data every time the screen comes into view
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchOrders();
    }, [])
  );

  if (loading && orders.length === 0) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchOrders} />}
      renderItem={({ item }) => (
        <View style={styles.orderCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.orderId}>Order #{item.id}</Text>
            <Text style={styles.orderDate}>
              {new Date(item.orderDate).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.cardBody}>
            <Text>User: {item.user.email}</Text>
            <Text>Status: {item.status || 'PENDING'}</Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.totalAmount}>Total: ${item.totalAmount.toFixed(2)}</Text>
          </View>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.emptyText}>No orders found.</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  cardBody: {
    marginBottom: 10,
  },
  cardFooter: {
    alignItems: 'flex-end',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: 'gray',
  },
});