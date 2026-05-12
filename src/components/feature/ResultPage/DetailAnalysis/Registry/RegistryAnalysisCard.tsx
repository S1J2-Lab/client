import styled from '@emotion/styled';
import { FileText } from 'lucide-react';
import { AnalysisCard } from '../../../../common/AnalysisCard';
import { AnalysisIssueList } from '../RegistryContract/AnalysisIssueList';
import type { RegistryData } from '../../../../../types/registry';
import { getRegistryAnalysisIssues } from '../../../../../utils/registryAnalysis';

const PREVIEW_COUNT = 2;

interface RegistryAnalysisCardProps {
  registry: RegistryData;
  onClickDetail?: () => void;
}

export function RegistryAnalysisCard({
  registry,
  onClickDetail,
}: RegistryAnalysisCardProps) {
  const allItems = getRegistryAnalysisIssues(registry);
  const previewItems = allItems.slice(0, PREVIEW_COUNT);
  const hasItems = allItems.length > 0;

  return (
    <AnalysisCard
      icon={<FileText />}
      title="등기부등본 분석"
      right={
        hasItems &&
        onClickDetail && (
          <DetailButton type="button" onClick={onClickDetail}>
            전체보기 &gt;
          </DetailButton>
        )
      }
    >
      <AnalysisIssueList
        items={previewItems}
        isPreview
        emptyMessage="확인이 필요한 특약 사항이 없어요."
      />{' '}
    </AnalysisCard>
  );
}

const DetailButton = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSub};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transform: translateY(9px);
`;
