import axios, { AxiosResponse } from 'axios';
import {
  AddResearcherProps,
  DeleteResearcherProps,
  LoginProps,
  ResetResearchersPasswordProps,
} from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// 공통 에러 처리
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const login = async ({
  userId,
  pw,
}: LoginProps): Promise<AxiosResponse<any>> => {
  const res = await api.post('/login', { userId, pw });
  if (res.status === 200) return res;
  else return Promise.reject(res);
};

export const logout = async (userId: string): Promise<AxiosResponse<any>> => {
  return await api('/logout', { params: { userId } });
};

export const getResearchers = async (): Promise<AxiosResponse<any>> => {
  return await api('/researchers');
};

export const addResearcher = async (
  newResearcher: AddResearcherProps
): Promise<AxiosResponse<any>> => {
  return await api.post('/researcher', newResearcher);
};

export const resetResearchersPassword = async ({
  pin,
  password,
}: ResetResearchersPasswordProps) => {
  return await api.patch('/researcher/reset', { pin, password });
};

export const deleteResearcher = async ({ pin }: DeleteResearcherProps) => {
  return await api.delete('/researcher', { params: { pin } });
};
