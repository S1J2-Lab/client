import { useCallback, useState } from 'react';
import { searchAddress } from '../api/address';
import type { Address } from '../types/address';

const FIRST_PAGE = 1;
const PAGE_SIZE = 10;

export function useAddressSearch() {
  const [keyword, setKeyword] = useState('');
  const [searchedKeyword, setSearchedKeyword] = useState('');
  const [currentAddresses, setCurrentAddresses] = useState<Address[]>([]);
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const [isSearched, setIsSearched] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const [hasNextPage, setHasNextPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = useCallback(async () => {
    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) return;

    try {
      setIsLoading(true);
      setIsSearched(true);
      setErrorMessage('');

      const addresses = await searchAddress(trimmedKeyword, FIRST_PAGE);

      setSearchedKeyword(trimmedKeyword);
      setCurrentAddresses(addresses);
      setCurrentPage(FIRST_PAGE);
      setHasNextPage(addresses.length === PAGE_SIZE);
    } catch {
      setCurrentAddresses([]);
      setHasNextPage(false);
      setErrorMessage('주소 검색에 실패했어요. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  }, [keyword]);

  const loadMoreAddresses = useCallback(async () => {
    if (isLoading || isFetchingMore || !hasNextPage || !searchedKeyword) return;

    const nextPage = currentPage + 1;

    try {
      setIsFetchingMore(true);
      setErrorMessage('');

      const addresses = await searchAddress(searchedKeyword, nextPage);

      setCurrentAddresses((prev) => [...prev, ...addresses]);
      setCurrentPage(nextPage);
      setHasNextPage(addresses.length === PAGE_SIZE);
    } catch {
      setErrorMessage('주소를 더 불러오지 못했어요.');
    } finally {
      setIsFetchingMore(false);
    }
  }, [currentPage, hasNextPage, isFetchingMore, isLoading, searchedKeyword]);

  return {
    keyword,
    setKeyword,
    isSearched,
    currentAddresses,
    hasNextPage,
    loadMoreAddresses,
    handleSearch,
    isLoading,
    isFetchingMore,
    errorMessage,
  };
}
