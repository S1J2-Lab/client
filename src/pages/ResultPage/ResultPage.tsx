import { useState } from 'react';
import styled from '@emotion/styled';

import { ResultAddressCard } from '../../components/feature/ResultPage/ResultAddressCard';
import { ResultTabs } from '../../components/feature/ResultPage/ResultTabs';
import { DetailAnalysisSection } from './DetailAnalysisSection';
import { ChecklistSection } from './ChecklistSection';
import type { ResultData } from '../../types/result';

type ResultTab = 'detail' | 'checklist' | 'caution';

const result: ResultData = {
  address: '서울특별시 강남구 테헤란로 123',
  analyzedAt: '2026-05-07T14:30:00+09:00',
  jeonseRatio: {
    ratioType: 'jeonse',
    ratioPercent: 72.5,
    riskLevel: 'caution',
    recentHigh: 450000000,
    recentLow: 320000000,
    average: 385000000,
    convertedDeposit: 380000000,
    sampleCount: 8,
    lowReliability: false,
  },
  registry: {
    mortgageCount: 1,
    mortgages: [
      {
        bank: '국민은행',
        amount: 200000000,
      },
    ],
    totalMortgage: 200000000,
    trustWarning: false,
    priorLease: false,
    ownershipChangeRecent: false,
  },
  building: {
    primaryUse: '아파트',
    isResidential: true,
    violation: false,
    approvedDate: '2010-03-15',
    redevelopmentZone: false,
  },
  contract: {
    toxicClauses: [
      {
        level: 'danger',
        title: '임의 해지 조항',
        originalText: '임대인은 사전 통보 없이 계약을 해지할 수 있다.',
        legalIssue: '임차인의 주거 안정권을 침해하는 일방적 조항입니다.',
        precedent: '대법원 2019다12345',
        suggestion: '해당 조항 삭제 또는 임차인 동의 요건 추가를 요구하세요.',
      },
    ],
    cautionClauses: [],
  },
};

export function ResultPage() {
  const [activeTab, setActiveTab] = useState<ResultTab>('detail');

  return (
    <Page>
      <ResultAddressCard address={result.address} />

      <ResultTabs activeTab={activeTab} onChangeTab={setActiveTab} />

      {activeTab === 'detail' && <DetailAnalysisSection result={result} />}
      {activeTab === 'checklist' && <ChecklistSection />}
      {activeTab === 'caution' && <CautionSection />}
    </Page>
  );
}

function CautionSection() {
  return (
    <Section>
      <SectionTitle>주의 사항</SectionTitle>
      <Description>
        분석 결과는 참고용 정보입니다. 계약 전 등기부등본, 건축물대장,
        임대차계약서를 직접 확인하고 필요 시 전문가 상담을 권장해요.
      </Description>
    </Section>
  );
}

const Page = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Section = styled.section`
  padding: 24px 20px;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

const SectionTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSub};
  font-size: 14px;
  line-height: 1.6;
`;
