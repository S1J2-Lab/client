import { apiClient } from './client';
import { BASE_URL } from './config';
import type { ContractType } from '../constants/contract';

interface ContractPeriod {
  startDate: string;
  endDate: string;
}

interface InitAnalysisRequest {
  address: string;
  jibunAddress: string;
  admCd: string;
  rnMgtSn: string;
  bdMgtSn: string;
  mno: string;
  sno: string;
  deposit: number;
  monthlyRent: number;
  contractType: ContractType;
  contractPeriod: ContractPeriod;
}

interface InitAnalysisResponse {
  status: 'success';
  data: {
    sessionId: string;
  };
}

export async function initAnalysis(
  request: InitAnalysisRequest,
): Promise<string> {
  const { data } = await apiClient.post<InitAnalysisResponse>(
    '/analysis/init',
    request,
  );

  return data.data.sessionId;
}

export function createAnalysisStream(sessionId: string) {
  const encodedSessionId = encodeURIComponent(sessionId);

  return new EventSource(
    `${BASE_URL}/analysis/stream?sessionId=${encodedSessionId}`,
  );
}
