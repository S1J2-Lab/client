import { apiClient } from './client';
import type { Address } from '../types/address';

interface AddressSearchResponse {
  status: 'success';
  data: {
    results: Address[];
  };
}

export async function searchAddress(
  query: string,
  page: number,
): Promise<Address[]> {
  const { data } = await apiClient.get<AddressSearchResponse>(
    '/address/search',
    {
      params: {
        query,
        page,
      },
    },
  );

  return data.data.results;
}
