// // // // // // // // import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// // // // // // // // import * as SecureStore from 'expo-secure-store';
// // // // // // // // import apiClient from './api/apiClient';

// // // // // // // // interface AuthContextType {
// // // // // // // //     token: string | null;
// // // // // // // //     isAuthenticated: boolean;
// // // // // // // //     isLoading: boolean;
// // // // // // // //     login: (email: string, password: string) => Promise<void>;
// // // // // // // //     logout: () => void;
// // // // // // // // }

// // // // // // // // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // // // // // // // export const AuthProvider = ({ children }: PropsWithChildren) => {
// // // // // // // //     const [token, setToken] = useState<string | null>(null);
// // // // // // // //     const [isLoading, setIsLoading] = useState(true);

// // // // // // // //     useEffect(() => {
// // // // // // // //         // Check for a token when the app loads
// // // // // // // //         const loadToken = async () => {
// // // // // // // //             const storedToken = await SecureStore.getItemAsync('authToken');
// // // // // // // //             if (storedToken) {
// // // // // // // //                 setToken(storedToken);
// // // // // // // //             }
// // // // // // // //             setIsLoading(false);
// // // // // // // //         };
// // // // // // // //         loadToken();
// // // // // // // //     }, []);

// // // // // // // //     const login = async (email: string, password: string) => {
// // // // // // // //         // Make the API call to your backend
// // // // // // // //         const response = await apiClient.post('/auth/login', { email, password });
// // // // // // // //         const { token: newToken } = response.data;
        
// // // // // // // //         // Save the token securely
// // // // // // // //         await SecureStore.setItemAsync('authToken', newToken);
// // // // // // // //         setToken(newToken);
// // // // // // // //     };

// // // // // // // //     const logout = async () => {
// // // // // // // //         await SecureStore.deleteItemAsync('authToken');
// // // // // // // //         setToken(null);
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <AuthContext.Provider value={{ token, isAuthenticated: !!token, isLoading, login, logout }}>
// // // // // // // //             {children}
// // // // // // // //         </AuthContext.Provider>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // // This is a custom hook to easily access the context
// // // // // // // // export const useAuth = () => {
// // // // // // // //     const context = useContext(AuthContext);
// // // // // // // //     if (context === undefined) {
// // // // // // // //         throw new Error('useAuth must be used within an AuthProvider');
// // // // // // // //     }
// // // // // // // //     return context;
// // // // // // // // };

// // // // // // // import React, { createContext, useState, useContext, PropsWithChildren } from 'react';
// // // // // // // import * as SecureStore from 'expo-secure-store';
// // // // // // // import apiClient from './api/apiClient';

// // // // // // // interface AuthContextType {
// // // // // // //     token: string | null;
// // // // // // //     login: (email: string, password: string) => Promise<void>;
// // // // // // //     logout: () => void;
// // // // // // // }

// // // // // // // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // // // // // // export const AuthProvider = ({ children }: PropsWithChildren) => {
// // // // // // //     const [token, setToken] = useState<string | null>(null);

// // // // // // //     const login = async (email: string, password: string) => {
// // // // // // //         const response = await apiClient.post('/auth/login', { email, password });
// // // // // // //         const { token: newToken } = response.data;
        
// // // // // // //         // Add the token to all future API calls automatically
// // // // // // //         apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        
// // // // // // //         // Save the token securely on the device
// // // // // // //         await SecureStore.setItemAsync('authToken', newToken);
// // // // // // //         setToken(newToken);
// // // // // // //     };

// // // // // // //     const logout = async () => {
// // // // // // //         delete apiClient.defaults.headers.common['Authorization'];
// // // // // // //         await SecureStore.deleteItemAsync('authToken');
// // // // // // //         setToken(null);
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <AuthContext.Provider value={{ token, login, logout }}>
// // // // // // //             {children}
// // // // // // //         </AuthContext.Provider>
// // // // // // //     );
// // // // // // // };

// // // // // // // // This is a helper "hook" to easily use our auth state
// // // // // // // export const useAuth = () => {
// // // // // // //     const context = useContext(AuthContext);
// // // // // // //     if (context === undefined) {
// // // // // // //         throw new Error('useAuth must be used within an AuthProvider');
// // // // // // //     }
// // // // // // //     return context;
// // // // // // // };

// // // // // // import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// // // // // // import * as SecureStore from 'expo-secure-store';
// // // // // // import apiClient from './api/apiClient';

// // // // // // interface AuthContextType {
// // // // // //     isAuthenticated: boolean;
// // // // // //     isLoading: boolean;
// // // // // //     login: (email: string, password: string) => Promise<void>;
// // // // // //     logout: () => void;
// // // // // // }

// // // // // // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // // // // // export const AuthProvider = ({ children }: PropsWithChildren) => {
// // // // // //     const [token, setToken] = useState<string | null>(null);
// // // // // //     const [isLoading, setIsLoading] = useState(true);

// // // // // //     useEffect(() => {
// // // // // //         // This function runs when the app starts to check if a token is already stored.
// // // // // //         const loadToken = async () => {
// // // // // //             const storedToken = await SecureStore.getItemAsync('authToken');
// // // // // //             if (storedToken) {
// // // // // //                 // If we find a token, set it for the app state and for future API calls
// // // // // //                 setToken(storedToken);
// // // // // //                 apiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
// // // // // //             }
// // // // // //             setIsLoading(false); // We're done checking, so stop loading.
// // // // // //         };
// // // // // //         loadToken();
// // // // // //     }, []);

// // // // // //     const login = async (email: string, password: string) => {
// // // // // //         const response = await apiClient.post('/auth/login', { email, password });
// // // // // //         const { token: newToken } = response.data;
        
// // // // // //         // Add the token to all future API calls automatically
// // // // // //         apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        
// // // // // //         // Save the token securely on the device and update the app state
// // // // // //         await SecureStore.setItemAsync('authToken', newToken);
// // // // // //         setToken(newToken);
// // // // // //     };

// // // // // //     const logout = async () => {
// // // // // //         // Remove the token from API headers, secure storage, and app state
// // // // // //         delete apiClient.defaults.headers.common['Authorization'];
// // // // // //         await SecureStore.deleteItemAsync('authToken');
// // // // // //         setToken(null);
// // // // // //     };

// // // // // //     return (
// // // // // //         <AuthContext.Provider value={{ isAuthenticated: !!token, isLoading, login, logout }}>
// // // // // //             {children}
// // // // // //         </AuthContext.Provider>
// // // // // //     );
// // // // // // };

// // // // // // // This is a custom hook to easily access the context
// // // // // // export const useAuth = () => {
// // // // // //     const context = useContext(AuthContext);
// // // // // //     if (context === undefined) {
// // // // // //         throw new Error('useAuth must be used within an AuthProvider');
// // // // // //     }
// // // // // //     return context;
// // // // // // };


// // // // // import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// // // // // import * as SecureStore from 'expo-secure-store';
// // // // // import apiClient from './api/apiClient';

// // // // // interface AuthContextType {
// // // // //     isAuthenticated: boolean;
// // // // //     isLoading: boolean;
// // // // //     login: (email: string, password: string) => Promise<void>;
// // // // //     logout: () => void;
// // // // // }

// // // // // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // // // // // Use a more direct approach with try/catch for storage operations
// // // // // const storeToken = async (key: string, value: string) => {
// // // // //   try {
// // // // //     await SecureStore.setItemAsync(key, value);
// // // // //     return true;
// // // // //   } catch (e) {
// // // // //     console.error("Error storing token:", e);
// // // // //     return false;
// // // // //   }
// // // // // };

// // // // // const getToken = async (key: string) => {
// // // // //   try {
// // // // //     return await SecureStore.getItemAsync(key);
// // // // //   } catch (e) {
// // // // //     console.error("Error retrieving token:", e);
// // // // //     return null;
// // // // //   }
// // // // // };

// // // // // const removeToken = async (key: string) => {
// // // // //   try {
// // // // //     await SecureStore.deleteItemAsync(key);
// // // // //     return true;
// // // // //   } catch (e) {
// // // // //     console.error("Error removing token:", e);
// // // // //     return false;
// // // // //   }
// // // // // };

// // // // // export const AuthProvider = ({ children }: PropsWithChildren) => {
// // // // //     const [token, setToken] = useState<string | null>(null);
// // // // //     const [isLoading, setIsLoading] = useState(true);

// // // // //     useEffect(() => {
// // // // //         const loadToken = async () => {
// // // // //             try {
// // // // //                 const storedToken = await getToken('authToken');
// // // // //                 if (storedToken) {
// // // // //                     setToken(storedToken);
// // // // //                     apiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
// // // // //                 }
// // // // //             } catch (error) {
// // // // //                 console.error("Failed to load token:", error);
// // // // //             } finally {
// // // // //                 setIsLoading(false);
// // // // //             }
// // // // //         };
// // // // //         loadToken();
// // // // //     }, []);

// // // // //     const login = async (email: string, password: string) => {
// // // // //         const response = await apiClient.post('/auth/login', { email, password });
// // // // //         const { token: newToken } = response.data;
        
// // // // //         apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
// // // // //         await storeToken('authToken', newToken);
// // // // //         setToken(newToken);
// // // // //     };

// // // // //     const logout = async () => {
// // // // //         delete apiClient.defaults.headers.common['Authorization'];
// // // // //         await removeToken('authToken');
// // // // //         setToken(null);
// // // // //     };

// // // // //     return (
// // // // //         <AuthContext.Provider value={{ isAuthenticated: !!token, isLoading, login, logout }}>
// // // // //             {children}
// // // // //         </AuthContext.Provider>
// // // // //     );
// // // // // };

// // // // // export const useAuth = () => {
// // // // //     const context = useContext(AuthContext);
// // // // //     if (context === undefined) {
// // // // //         throw new Error('useAuth must be used within an AuthProvider');
// // // // //     }
// // // // //     return context;
// // // // // };

// // // // // filepath: /Users/kabirsharma/Desktop/projects/proj2/mobile/app/lib/AuthContext.tsx
// // // // import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// // // // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // // import apiClient from './api/apiClient';

// // // // interface AuthContextType {
// // // //     isAuthenticated: boolean;
// // // //     isLoading: boolean;
// // // //     login: (email: string, password: string) => Promise<void>;
// // // //     logout: () => void;
// // // // }

// // // // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // // // // Helper functions using AsyncStorage instead of SecureStore
// // // // const storeToken = async (key: string, value: string) => {
// // // //   try {
// // // //     await AsyncStorage.setItem(key, value);
// // // //     return true;
// // // //   } catch (e) {
// // // //     console.error("Error storing token:", e);
// // // //     return false;
// // // //   }
// // // // };

// // // // const getToken = async (key: string) => {
// // // //   try {
// // // //     return await AsyncStorage.getItem(key);
// // // //   } catch (e) {
// // // //     console.error("Error retrieving token:", e);
// // // //     return null;
// // // //   }
// // // // };

// // // // const removeToken = async (key: string) => {
// // // //   try {
// // // //     await AsyncStorage.removeItem(key);
// // // //     return true;
// // // //   } catch (e) {
// // // //     console.error("Error removing token:", e);
// // // //     return false;
// // // //   }
// // // // };

// // // // export const AuthProvider = ({ children }: PropsWithChildren) => {
// // // //     const [token, setToken] = useState<string | null>(null);
// // // //     const [isLoading, setIsLoading] = useState(true);

// // // //     useEffect(() => {
// // // //         const loadToken = async () => {
// // // //             try {
// // // //                 const storedToken = await getToken('authToken');
// // // //                 if (storedToken) {
// // // //                     setToken(storedToken);
// // // //                     apiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
// // // //                 }
// // // //             } catch (error) {
// // // //                 console.error("Failed to load token:", error);
// // // //             } finally {
// // // //                 setIsLoading(false);
// // // //             }
// // // //         };
// // // //         loadToken();
// // // //     }, []);

// // // //     const login = async (email: string, password: string) => {
// // // //         const response = await apiClient.post('/auth/login', { email, password });
// // // //         const { token: newToken } = response.data;
        
// // // //         apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
// // // //         await storeToken('authToken', newToken);
// // // //         setToken(newToken);
// // // //     };

// // // //     const logout = async () => {
// // // //         delete apiClient.defaults.headers.common['Authorization'];
// // // //         await removeToken('authToken');
// // // //         setToken(null);
// // // //     };

// // // //     return (
// // // //         <AuthContext.Provider value={{ isAuthenticated: !!token, isLoading, login, logout }}>
// // // //             {children}
// // // //         </AuthContext.Provider>
// // // //     );
// // // // };

// // // // export const useAuth = () => {
// // // //     const context = useContext(AuthContext);
// // // //     if (context === undefined) {
// // // //         throw new Error('useAuth must be used within an AuthProvider');
// // // //     }
// // // //     return context;
// // // // };

// // // import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // import apiClient from './api/apiClient';

// // // interface User {
// // //   email: string;
// // //   // add other fields if needed
// // // }

// // // interface AuthContextType {
// // //   user: User | null;
// // //   token: string | null;
// // //   isAuthenticated: boolean;
// // //   isLoading: boolean;
// // //   login: (email: string, password: string) => Promise<void>;
// // //   logout: () => Promise<void>;
// // // }

// // // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // // export const AuthProvider = ({ children }: PropsWithChildren) => {
// // //   const [user, setUser] = useState<User | null>(null);
// // //   const [token, setToken] = useState<string | null>(null);
// // //   const [isLoading, setIsLoading] = useState(true);

// // //   useEffect(() => {
// // //     const loadAuth = async () => {
// // //       const storedToken = await AsyncStorage.getItem('authToken');
// // //       const storedEmail = await AsyncStorage.getItem('authEmail');
// // //       if (storedToken && storedEmail) {
// // //         setToken(storedToken);
// // //         setUser({ email: storedEmail });
// // //         apiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
// // //       }
// // //       setIsLoading(false);
// // //     };
// // //     loadAuth();
// // //   }, []);

// // //   const login = async (email: string, password: string) => {
// // //     const response = await apiClient.post('/auth/login', { email, password });
// // //     const { token: newToken } = response.data;
// // //     setToken(newToken);
// // //     setUser({ email });
// // //     apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
// // //     await AsyncStorage.setItem('authToken', newToken);
// // //     await AsyncStorage.setItem('authEmail', email);
// // //   };

// // //   const logout = async () => {
// // //     setToken(null);
// // //     setUser(null);
// // //     delete apiClient.defaults.headers.common['Authorization'];
// // //     await AsyncStorage.removeItem('authToken');
// // //     await AsyncStorage.removeItem('authEmail');
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ user, token, isAuthenticated: !!token, isLoading, login, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // export const useAuth = () => {
// // //   const context = useContext(AuthContext);
// // //   if (!context) throw new Error('useAuth must be used within an AuthProvider');
// // //   return context;
// // // };

// // import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import apiClient from './api/apiClient';

// // interface User {
// //   email: string;
// // }

// // interface AuthContextType {
// //   user: User | null;
// //   token: string | null;
// //   isAuthenticated: boolean;
// //   isLoading: boolean;
// //   login: (email: string, password: string) => Promise<void>;
// //   logout: () => Promise<void>;
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export const AuthProvider = ({ children }: PropsWithChildren) => {
// //   const [user, setUser] = useState<User | null>(null);
// //   const [token, setToken] = useState<string | null>(null);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const loadAuth = async () => {
// //       try {
// //         setIsLoading(true);
// //         const storedToken = await AsyncStorage.getItem('authToken');
// //         const storedEmail = await AsyncStorage.getItem('authEmail');
        
// //         if (storedToken && storedEmail) {
// //           setToken(storedToken);
// //           setUser({ email: storedEmail });
// //           apiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
// //         }
// //       } catch (error) {
// //         console.error('Error loading auth data:', error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
    
// //     loadAuth();
// //   }, []);

// //   const login = async (email: string, password: string) => {
// //     const response = await apiClient.post('/auth/login', { email, password });
// //     const { token: newToken } = response.data;
    
// //     setToken(newToken);
// //     setUser({ email }); // Set the user with email
    
// //     apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    
// //     await AsyncStorage.setItem('authToken', newToken);
// //     await AsyncStorage.setItem('authEmail', email); // Store email
// //   };

// //   const logout = async () => {
// //     // Important: We DO NOT call clearCart here
// //     // That would create a circular dependency
// //     setToken(null);
// //     setUser(null);
    
// //     delete apiClient.defaults.headers.common['Authorization'];
    
// //     await AsyncStorage.removeItem('authToken');
// //     await AsyncStorage.removeItem('authEmail');
// //     await AsyncStorage.clear(); 
// //   };

// //   return (
// //     <AuthContext.Provider value={{ 
// //       user, 
// //       token, 
// //       isAuthenticated: !!token, 
// //       isLoading, 
// //       login, 
// //       logout 
// //     }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (!context) {
// //     throw new Error('useAuth must be used within an AuthProvider');
// //   }
// //   return context;
// // };
// import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import apiClient from './api/apiClient';
// import { jwtDecode } from 'jwt-decode';

// interface User {
//   email: string;
//   roles: string[];
// }

// interface AuthContextType {
//     isAuthenticated: boolean;
//     isLoading: boolean;
//     user: User | null;
//     login: (email: string, password: string) => Promise<void>;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: PropsWithChildren) => {
//     const [user, setUser] = useState<User | null>(null);
//     const [isLoading, setIsLoading] = useState(true);

//     const setupUserFromToken = (token: string | null) => {
//         if (token) {
//             apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//             const decoded: { sub: string, roles: string[] } = jwtDecode(token);
//             setUser({ email: decoded.sub, roles: decoded.roles || [] });
//         } else {
//             delete apiClient.defaults.headers.common['Authorization'];
//             setUser(null);
//         }
//     };

//     useEffect(() => {
//         const loadToken = async () => {
//             const storedToken = await AsyncStorage.getItem('authToken');
//             setupUserFromToken(storedToken);
//             setIsLoading(false);
//         };
//         loadToken();
//     }, []);

//     const login = async (email: string, password: string) => {
//         const response = await apiClient.post('/auth/login', { email, password });
//         const { token } = response.data;
//         await AsyncStorage.setItem('authToken', token);
//         setupUserFromToken(token);
//     };

//     const logout = async () => {
//         await AsyncStorage.removeItem('authToken');
//         setupUserFromToken(null);
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated: !!user, isLoading, user, login, logout }}>
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
import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from './api/apiClient';
import { jwtDecode } from 'jwt-decode';

interface User {
  email: string;
  roles: string[];
}

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // const setupUserFromToken = (token: string | null) => {
    //     if (token) {
    //         apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //         const decoded: { sub: string, roles: string[] } = jwtDecode(token);
    //         setUser({ email: decoded.sub, roles: decoded.roles || [] });
    //     } else {
    //         delete apiClient.defaults.headers.common['Authorization'];
    //         setUser(null);
    //     }
    // };
    const setupUserFromToken = (token: string | null) => {
    if (token) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      try {
        console.log("RAW TOKEN:", token);
        const decoded = jwtDecode(token);
        console.log("DECODED TOKEN:", JSON.stringify(decoded, null, 2));
        
        // Make sure roles is an array and has proper values
        const roles = decoded.roles || [];
        console.log("EXTRACTED ROLES:", roles);
        
        setUser({ 
          email: decoded.sub, 
          roles: Array.isArray(roles) ? roles : [] 
        });
      } catch (error) {
        console.error("Error decoding token:", error);
        setUser(null);
      }
    } else {
      delete apiClient.defaults.headers.common['Authorization'];
      setUser(null);
    }
  };

    useEffect(() => {
        const loadToken = async () => {
            const storedToken = await AsyncStorage.getItem('authToken');
            setupUserFromToken(storedToken);
            setIsLoading(false);
        };
        loadToken();
    }, []);

    const login = async (email: string, password: string) => {
        const response = await apiClient.post('/auth/login', { email, password });
        const { token } = response.data;
        await AsyncStorage.setItem('authToken', token);
        setupUserFromToken(token);
    };

    const logout = async () => {
        await AsyncStorage.removeItem('authToken');
        setupUserFromToken(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, isLoading, user, login, logout }}>
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