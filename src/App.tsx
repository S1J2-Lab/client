import styled from '@emotion/styled';

const TestBox = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius.md};
`;

function App() {
  return <TestBox>emotion 적용 확인</TestBox>;
}

export default App;
