import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth.service';
import api from '../services/api';

interface UserData {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: UserData | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function signIn() {
    setLoading(true);
    const response = await auth.signIn();

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
    setLoading(false);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, loading: loading, user: user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
};
