import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const CARD_PADDING = '20px';
const CARD_GAP = '6px';

interface CardProps {
  children: ReactNode;
}

const CardContainer = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.radius.lg};
  box-shadow: ${theme.shadow.card};
  padding: ${CARD_PADDING};
  display: flex;
  flex-direction: column;
  gap: ${CARD_GAP};
`;

export function Card({ children, ...props }: CardProps) {
  return <CardContainer {...props}>{children}</CardContainer>;
}
