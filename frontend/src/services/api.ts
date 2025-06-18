import axios from 'axios';
import { ConfigurationData, UpdateResponse } from '../types';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getConfiguration = async (configId: string): Promise<ConfigurationData> => {
  const response = await api.get<ConfigurationData>(`/configurations/${configId}`);
  return response.data;
};

export const updateRemark = async (configId: string, remark: string): Promise<UpdateResponse> => {
  const response = await api.put<UpdateResponse>(`/configurations/${configId}`, { remark });
  return response.data;
}; 