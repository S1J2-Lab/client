import type { RiskLevel } from '../types/risk';

export function getRatioNotice(
  riskLevel: RiskLevel | null,
  sampleCount: number,
) {
  if (sampleCount === 0) {
    return '최근 거래량이 없어 전세가율을 계산하기 어려워요. 주변 시세를 추가로 확인해 주세요.';
  }

  if (riskLevel === 'safe') {
    return '전세가율이 안정적인 수준이에요.';
  }

  if (riskLevel === 'caution') {
    return '전세가율이 다소 높은 편이에요. 시세와 보증보험 가능 여부를 확인해 주세요.';
  }

  if (riskLevel === 'danger') {
    return '전세가율이 매우 높아 깡통전세 위험이 있습니다. 계약 전 반드시 추가 확인이 필요해요.';
  }

  return '전세가율 정보를 확인하기 어려워요. 주변 시세를 추가로 확인해 주세요.';
}

export function formatPrice(price: number | null) {
  if (price === null) {
    return '정보 없음';
  }

  return `${price.toLocaleString()}원`;
}
