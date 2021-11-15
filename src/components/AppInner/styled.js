import { styled } from '@linaria/react';
import { Row } from 'antd';

export const AppInnerStyled = styled.div`
  background-color: ${({ color }) => color};
  min-height: 100vh;
`;

export const AppImageStyled = styled.img`
  height: 40vmin;
  pointer-events: none;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`;

export const RowWithMarginStyled = styled(Row)`
  padding-top: 15px;
`;
