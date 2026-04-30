import styled from '@emotion/styled';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

type StepState = 'done' | 'active' | 'todo';

function getStepState(step: number, currentStep: number): StepState {
  if (step < currentStep) return 'done';
  if (step === currentStep) return 'active';
  return 'todo';
}

function getStepAriaLabel(step: number, state: StepState) {
  if (state === 'done') return `${step}단계 완료`;
  if (state === 'active') return `${step}단계 현재 단계`;
  return `${step}단계 예정`;
}

export function StepIndicator({
  currentStep,
  totalSteps = 4,
}: StepIndicatorProps) {
  const safeTotalSteps = Math.max(1, totalSteps);
  const safeCurrentStep = Math.min(Math.max(currentStep, 1), safeTotalSteps);
  return (
    <Container>
      <Row role="list" aria-label="진행 단계">
        <Line />

        {Array.from({ length: safeTotalSteps }, (_, index) => {
          const step = index + 1;
          const state = getStepState(step, safeCurrentStep);
          const isActive = state === 'active';

          return (
            <StepWrapper
              key={step}
              $state={state}
              role="listitem"
              aria-current={isActive ? 'step' : undefined}
              aria-label={getStepAriaLabel(step, state)}
            >
              {state === 'done' ? <Check size={14} strokeWidth={3} /> : step}
            </StepWrapper>
          );
        })}
      </Row>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.surface};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 14px;
  right: 14px;
  height: 2px;
  background: ${({ theme }) => theme.colors.border};
  transform: translateY(-50%);
  z-index: 0;
`;

const StepWrapper = styled.div<{ $state: StepState }>`
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.radius.full};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 13px;
  font-weight: 700;
  z-index: 1;

  background: ${({ theme, $state }) =>
    $state === 'active' || $state === 'done'
      ? theme.colors.primary
      : theme.colors.border};

  color: ${({ theme, $state }) =>
    $state === 'todo' ? theme.colors.textMuted : theme.colors.surface};

  box-shadow: ${({ theme, $state }) =>
    $state === 'active' ? `0 0 0 4px ${theme.colors.primaryLight}` : 'none'};
`;
