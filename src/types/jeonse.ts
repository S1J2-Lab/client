import type { RiskLevel } from './risk';

export interface JeonseRatioData {
  ratioType: 'jeonse' | 'monthly';
  ratioPercent: number | null;
  riskLevel: RiskLevel | null;
  recentHigh: number | null;
  recentLow: number | null;
  average: number | null;
  convertedDeposit: number | null;
  sampleCount: number;
  lowReliability: boolean;
}
