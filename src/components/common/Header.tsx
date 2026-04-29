import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { theme } from '../../styles/theme';

interface HeaderProps {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
}

export function Header({ title, left, right }: HeaderProps) {
  return (
    <Container>
      <Side>{left}</Side>
      <Title>{title}</Title>
      <Side>{right}</Side>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: ${theme.colors.surface};
  border-bottom: 1px solid ${theme.colors.borderLight};
`;

const Side = styled.div`
  width: 32px;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;
