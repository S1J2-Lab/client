import styled from '@emotion/styled';

interface LayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
}

export function Layout({ header, children }: LayoutProps) {
  return (
    <Wrapper>
      <LayoutWrapper>
        {header}
        <PageContent>{children}</PageContent>
      </LayoutWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
`;

const LayoutWrapper = styled.main`
  width: 100%;
  max-width: 420px;
  min-width: 320px;
  min-height: 100dvh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const PageContent = styled.section`
  flex: 1;
  padding: 16px 20px 24px;
`;
