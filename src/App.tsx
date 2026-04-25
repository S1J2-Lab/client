import styled from '@emotion/styled';

function App() {
  return (
    <Page>
      <Card>
        <Badge>공용 스타일 테스트</Badge>

        <Title>지켜줘 홈즈</Title>
        <Description>
          ThemeProvider, GlobalStyles, 공통 색상과 radius가 잘 적용되는지
          확인하는 화면입니다.
        </Description>

        <ButtonGroup>
          <PrimaryButton>primary 버튼</PrimaryButton>
          <SecondaryButton>secondary 버튼</SecondaryButton>
        </ButtonGroup>

        <InfoBox>
          <strong>전역 스타일 확인</strong>
          <p>
            body 배경색, 기본 폰트, 카드 색상, border, radius가 적용되는지
            확인하세요.
          </p>
        </InfoBox>
      </Card>
    </Page>
  );
}

export default App;

const Page = styled.main`
  min-height: 100vh;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.section`
  width: 100%;
  max-width: 420px;
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.cardForeground};
`;

const Badge = styled.span`
  display: inline-flex;
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentForeground};
  font-size: 13px;
  font-weight: 700;
`;

const Title = styled.h1`
  margin: 18px 0 8px;
  font-size: 32px;
  line-height: 1.2;
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const PrimaryButton = styled.button`
  flex: 1;
  border: 0;
  padding: 12px 14px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-weight: 700;
`;

const SecondaryButton = styled.button`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px 14px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryForeground};
  font-weight: 700;
`;

const InfoBox = styled.div`
  margin-top: 20px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.xl};
  background-color: ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.mutedForeground};

  p {
    margin: 6px 0 0;
    line-height: 1.5;
  }
`;
