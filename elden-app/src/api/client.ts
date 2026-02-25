import axios, { AxiosResponse } from 'axios';
import { Character, Location, Lore } from '../types';

export const API_BASE_URL = 'http://192.168.1.57:5035';
const API_URL = `${API_BASE_URL}/api`;

const api = axios.create({
    baseURL: API_URL,
});

export const getCharacters = (): Promise<AxiosResponse<Character[]>> => api.get('/characters');
export const getLocations = (): Promise<AxiosResponse<Location[]>> => api.get('/locations');
export const getLore = (): Promise<AxiosResponse<Lore[]>> => api.get('/lore');

export default api;
