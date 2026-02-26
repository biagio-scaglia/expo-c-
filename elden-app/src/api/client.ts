import axios, { AxiosResponse } from 'axios';
import { Character, Location, Lore } from '../types';

// Use Expo's built-in environment variables, fallback to localhost for emulator testing
export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5035';
const API_URL = `${API_BASE_URL}/api`;

const api = axios.create({
    baseURL: API_URL,
});

export const getCharacters = (): Promise<AxiosResponse<Character[]>> => api.get('/characters');
export const getLocations = (): Promise<AxiosResponse<Location[]>> => api.get('/locations');
export const getLore = (): Promise<AxiosResponse<Lore[]>> => api.get('/lore');

export default api;
