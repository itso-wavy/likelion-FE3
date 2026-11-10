import { useState } from 'react';

interface AuthState {
  isLoggedIn: 0 | 1;
  userId: string | null;
}

export const useAuth = () => {
  const [auth, setAuth] = useState<AuthState>(() => {
    const storedAuth = localStorage.getItem('auth');
    return storedAuth
      ? JSON.parse(storedAuth)
      : { isLoggedIn: 0, userId: null };
  });

  const saveAuthInfo = (userId: string) => {
    const newAuth: AuthState = { isLoggedIn: 1, userId };
    setAuth(newAuth);
    localStorage.setItem('auth', JSON.stringify(newAuth));
  };

  const deleteAuthInfo = () => {
    const newAuth: AuthState = { isLoggedIn: 0, userId: null };
    setAuth(newAuth);
    localStorage.setItem('auth', JSON.stringify(newAuth));
  };

  return { auth, saveAuthInfo, deleteAuthInfo };
};
