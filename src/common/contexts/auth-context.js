import { createContext } from 'react';

const isJWTokenPresent = localStorage.getItem("learngram-jwt-access-key") ? true : false

export const AuthContext = createContext({ authenticated: isJWTokenPresent });