import styled from '@emotion/styled';
import { CircleAlert } from 'lucide-react';

const ICON_SIZE = 16;
const ICON_STROKE_WIDTH = 2.2;

export function PrivacyMaskingBanner() {
  return (
    <Banner>
      <IconBox>
        <CircleAlert
          size={ICON_SIZE}
          strokeWidth={ICON_STROKE_WIDTH}
          aria-hidden="true"
        />
      </IconBox>
      <Body>
        <h4>개인정보 마스킹 필요</h4>
        <p>개인정보 마스킹이 필요한 파일이 있어요.</p>
        <p>카드의 ⓘ 아이콘을 눌러 확인해주세요.</p>
      </Body>
    </Banner>
  );
}

const Banner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.warningBg};
  border: 1px solid ${({ theme }) => theme.colors.warningLight};
`;

const IconBox = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.warningLight};
  color: ${({ theme }) => theme.colors.warning};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Body = styled.div`
  flex: 1;

  > h4 {
    font-size: 13.5px;
    font-weight: 800;
    color: #92400e;
    margin-bottom: 6px;
  }

  > p {
    font-size: 12.5px;
    line-height: 1.55;
    color: #92400e;

    & + p {
      margin-top: 4px;
    }
  }
`;
