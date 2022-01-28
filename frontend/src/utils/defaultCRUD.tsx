import axios from 'axios';
import React from 'react';

export enum URL {
  DEVELOP = 'http://localhost:4000/',
}

export enum URLPaths {
  CUSTOMER = 'customers/',
  ORDERS = 'orders/',
}

export const fetch = async (path: string): Promise<any> => {
  const result = await axios.get(URL.DEVELOP + path);
  return result;
};
