import { createContext } from 'react';
import {LEARNGRAM_ACCESS_KEY} from '../constants/constants'

const isJWTokenPresent = localStorage.getItem(LEARNGRAM_ACCESS_KEY) ? true : false

export const AuthContext = createContext({ authenticated: isJWTokenPresent });