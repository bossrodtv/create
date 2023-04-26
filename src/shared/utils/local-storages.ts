import { isServer } from 'shared/constants/commons';

export const setLocalStorage = (key: string, value: unknown) => {
  if (isServer) return;
  localStorage[key] = value;
};

export const getLocalStorage = (key: string) => {
  if (isServer) return '';
  if (!localStorage[key]) return '';
  return localStorage[key] as string;
};

export const listOfLocalStorage = <T = Record<string, unknown>>() => {
  if (isServer) return {};
  return localStorage as T;
};

export const clearLocalStorage = () => {
  if (isServer) return;
  localStorage.clear();
};
