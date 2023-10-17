import styled from '@emotion/styled';

export const ContainerCard = styled.div`
  position: relative;

  height: ${props => props.height}px;
`;

export const WrapperInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;

  border-radius: 1rem;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 17%,
    rgba(0, 0, 0, 0.6671262254901961) 78%,
    rgba(255, 255, 255, 0) 100%
  );
`;
export const NameFilm = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.5;
  letter-spacing: 0.005em;

  margin-bottom: 5px;
  color: #f9f9f9;
  padding: 0.25rem 0.5rem 0rem 0.5rem;
`;

export const StatFilm = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.67;
  letter-spacing: 0.005em;

  display: flex;
  align-items: center;

  color: white;
  padding: 0rem 0.5rem 0.25rem 0.5rem;
`;
