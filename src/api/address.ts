import axios from 'axios';
import { BASE_URL, API_TIMEOUT } from './config';
import type { Address } from '../types/address';

interface AddressSearchResponse {
  data: {
    results: Address[];
  };
}

export async function searchAddress(query: string): Promise<Address[]> {
  const { data } = await axios.get<AddressSearchResponse>(
    `${BASE_URL}/address/search`,
    {
      params: {
        query,
      },
      timeout: API_TIMEOUT,
    },
  );

  return data.data.results;
}
