import { useState } from 'react';
import { searchAddress } from '../api/address';
import type { Address } from '../types/address';

export function useAddressSearch() {
  const [keyword, setKeyword] = useState('');
  const [currentAddresses, setCurrentAddresses] = useState<Address[]>([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) return;

    try {
      setIsLoading(true);
      setIsSearched(true);
      setErrorMessage('');

      const addresses = await searchAddress(trimmedKeyword);
      setCurrentAddresses(addresses);
    } catch {
      setCurrentAddresses([]);
      setErrorMessage('주소 검색에 실패했어요. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    keyword,
    setKeyword,
    isSearched,
    currentAddresses,
    hasNextPage: false,
    loadMoreAddresses: () => {},
    handleSearch,
    isLoading,
    errorMessage,
  };
}
