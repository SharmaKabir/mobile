// // // // import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// // // // import * as SecureStore from 'expo-secure-store';
// // // // import apiClient from './api/apiClient';

// // // // interface AuthContextType {
// // // //     token: string | null;
// // // //     isAuthenticated: boolean;
// // // //     isLoading: boolean;
// // // //     login: (email: string, password: string) => Promise<void>;
// // // //     logout: () => void;
// // // // }

// // // // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // // // export const AuthProvider = ({ children }: PropsWithChildren) => {
// // // //     const [token, setToken] = useState<string | null>(null);
// // // //     const [isLoading, setIsLoading] = useState(true);

// // // //     useEffect(() => {
// // // //         // Check for a token when the app loads
// // // //         const loadToken = async () => {
// // // //             const storedToken = await SecureStore.getItemAsync('authToken');
// // // //             if (storedToken) {
// // // //                 setToken(storedToken);
// // // //             }
// // // //             setIsLoading(false);
// // // //         };
// // // //         loadToken();
// // // //     }, []);

// // // //     const login = async (email: string, password: string) => {
// // // //         // Make the API call to your backend
// // // //         const response = await apiClient.post('/auth/login', { email, password });
// // // //         const { token: newToken } = response.data;
        
// // // //         // Save the token securely
// // // //         await SecureStore.setItemAsync('authToken', newToken);
// // // //         setToken(newToken);
// // // //     };

// // // //     const logout = async () => {
// // // //         await SecureStore.deleteItemAsync('authToken');
// // // //         setToken(null);
// // // //     };

// // // //     return (
// // // //         <AuthContext.Provider value={{ token, isAuthenticated: !!token, isLoading, login, logout }}>
// // // //             {children}
// // // //         </AuthContext.Provider>
// // // //     );
// // // // };

// // // // // This is a custom hook to easily access the context
// // // // export const useAuth = () => {
// // // //     const context = useContext(AuthContext);
// // // //     if (context === undefined) {
// // // //         throw new Error('useAuth must be used within an AuthProvider');
// // // //     }
// // // //     return context;
// // // // };

// // // import React, { createContext, useState, useContext, PropsWithChildren } from 'react';
// // // import * as SecureStore from 'expo-secure-store';
// // // import apiClient from './api/apiClient';

// // // interface AuthContextType {
// // //     token: string | null;
// // //     login: (email: string, password: string) => Promise<void>;
// // //     logout: () => void;
// // // }

// // // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // // export const AuthProvider = ({ children }: PropsWithChildren) => {
// // //     const [token, setToken] = useState<string | null>(null);

// // //     const login = async (email: string, password: string) => {
// // //         const response = await apiClient.post('/auth/login', { email, password });
// // //         const { token: newToken } = response.data;
        
// // //         // Add the token to all future API calls automatically
// // //         apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        
// // //         // Save the token securely on the device
// // //         await SecureStore.setItemAsync('authToken', newToken);
// // //         setToken(newToken);
// // //     };

// // //     const logout = async () => {
// // //         delete apiClient.defaults.headers.common['Authorization'];
// // //         await SecureStore.deleteItemAsync('authToken');
// // //         setToken(null);
// // //     };

// // //     return (
// // //         <AuthContext.Provider value={{ token, login, logout }}>
// // //             {children}
// // //         </AuthContext.Provider>
// // //     );
// // // };

// // // // This is a helper "hook" to easily use our auth state
// // // export const useAuth = () => {
// // //     const context = useContext(AuthContext);
// // //     if (context === undefined) {
// // //         throw new Error('useAuth must be used within an AuthProvider');
// // //     }
// // //     return context;
// // // };

// // import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// // import * as SecureStore from 'expo-secure-store';
// // import apiClient from './api/apiClient';

// // interface AuthContextType {
// //     isAuthenticated: boolean;
// //     isLoading: boolean;
// //     login: (email: string, password: string) => Promise<void>;
// //     logout: () => void;
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export const AuthProvider = ({ children }: PropsWithChildren) => {
// //     const [token, setToken] = useState<string | null>(null);
// //     const [isLoading, setIsLoading] = useState(true);

// //     useEffect(() => {
// //         // This function runs when the app starts to check if a token is already stored.
// //         const loadToken = async () => {
// //             const storedToken = await SecureStore.getItemAsync('authToken');
// //             if (storedToken) {
// //                 // If we find a token, set it for the app state and for future API calls
// //                 setToken(storedToken);
// //                 apiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
// //             }
// //             setIsLoading(false); // We're done checking, so stop loading.
// //         };
// //         loadToken();
// //     }, []);

// //     const login = async (email: string, password: string) => {
// //         const response = await apiClient.post('/auth/login', { email, password });
// //         const { token: newToken } = response.data;
        
// //         // Add the token to all future API calls automatically
// //         apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        
// //         // Save the token securely on the device and update the app state
// //         await SecureStore.setItemAsync('authToken', newToken);
// //         setToken(newToken);
// //     };

// //     const logout = async () => {
// //         // Remove the token from API headers, secure storage, and app state
// //         delete apiClient.defaults.headers.common['Authorization'];
// //         await SecureStore.deleteItemAsync('authToken');
// //         setToken(null);
// //     };

// //     return (
// //         <AuthContext.Provider value={{ isAuthenticated: !!token, isLoading, login, logout }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };

// // // This is a custom hook to easily access the context
// // export const useAuth = () => {
// //     const context = useContext(AuthContext);
// //     if (context === undefined) {
// //         throw new Error('useAuth must be used within an AuthProvider');
// //     }
// //     return context;
// // };


// import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// import * as SecureStore from 'expo-secure-store';
// import apiClient from './api/apiClient';

// interface AuthContextType {
//     isAuthenticated: boolean;
//     isLoading: boolean;
//     login: (email: string, password: string) => Promise<void>;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // Use a more direct approach with try/catch for storage operations
// const storeToken = async (key: string, value: string) => {
//   try {
//     await SecureStore.setItemAsync(key, value);
//     return true;
//   } catch (e) {
//     console.error("Error storing token:", e);
//     return false;
//   }
// };

// const getToken = async (key: string) => {
//   try {
//     return await SecureStore.getItemAsync(key);
//   } catch (e) {
//     console.error("Error retrieving token:", e);
//     return null;
//   }
// };

// const removeToken = async (key: string) => {
//   try {
//     await SecureStore.deleteItemAsync(key);
//     return true;
//   } catch (e) {
//     console.error("Error removing token:", e);
//     return false;
//   }
// };

// export const AuthProvider = ({ children }: PropsWithChildren) => {
//     const [token, setToken] = useState<string | null>(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const loadToken = async () => {
//             try {
//                 const storedToken = await getToken('authToken');
//                 if (storedToken) {
//                     setToken(storedToken);
//                     apiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
//                 }
//             } catch (error) {
//                 console.error("Failed to load token:", error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         loadToken();
//     }, []);

//     const login = async (email: string, password: string) => {
//         const response = await apiClient.post('/auth/login', { email, password });
//         const { token: newToken } = response.data;
        
//         apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
//         await storeToken('authToken', newToken);
//         setToken(newToken);
//     };

//     const logout = async () => {
//         delete apiClient.defaults.headers.common['Authorization'];
//         await removeToken('authToken');
//         setToken(null);
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated: !!token, isLoading, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };

// filepath: /Users/kabirsharma/Desktop/projects/proj2/mobile/app/lib/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from './api/apiClient';

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper functions using AsyncStorage instead of SecureStore
const storeToken = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.error("Error storing token:", e);
    return false;
  }
};

const getToken = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.error("Error retrieving token:", e);
    return null;
  }
};

const removeToken = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error("Error removing token:", e);
    return false;
  }
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadToken = async () => {
            try {
                const storedToken = await getToken('authToken');
                if (storedToken) {
                    setToken(storedToken);
                    apiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
                }
            } catch (error) {
                console.error("Failed to load token:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadToken();
    }, []);

    const login = async (email: string, password: string) => {
        const response = await apiClient.post('/auth/login', { email, password });
        const { token: newToken } = response.data;
        
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        await storeToken('authToken', newToken);
        setToken(newToken);
    };

    const logout = async () => {
        delete apiClient.defaults.headers.common['Authorization'];
        await removeToken('authToken');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!token, isLoading, login, logout }}>
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