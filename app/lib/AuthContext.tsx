import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from './api/apiClient';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'expo-router';

// Define the structure of the user object we'll get from the JWT
interface User {
  email: string;
  roles: string[];
}

interface AuthContextType {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('authToken');
        if (storedToken) {
          const decodedToken: { sub: string; roles: string[] } = jwtDecode(storedToken);
          setUser({ email: decodedToken.sub, roles: decodedToken.roles });
          setToken(storedToken);
          apiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        }
      } catch (e) {
        console.error("Failed to load auth token.", e);
      } finally {
        setIsLoading(false);
      }
    };
    loadAuthData();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await apiClient.post('/auth/login', { email, password });
    const { token: newToken } = response.data;

    await AsyncStorage.setItem('authToken', newToken);
    const decodedToken: { sub: string; roles: string[] } = jwtDecode(newToken);
    setUser({ email: decodedToken.sub, roles: decodedToken.roles });
    setToken(newToken);
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
  };

  const logout = async () => {
    console.log("Logging out...");
    delete apiClient.defaults.headers.common['Authorization'];
    await AsyncStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
    router.replace('/(tabs)');
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated: !!token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};