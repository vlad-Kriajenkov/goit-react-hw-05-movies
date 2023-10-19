import styled from '@emotion/styled';

export const CardBackGraund = styled.div`
  display: grid;

  background-color: #ffffff18;
  border: 0.063rem solid #ffffff12;
  border-radius: 1rem;
  height: ${props => props.height};
  margin: 0.5rem;
  width: ${props => props.width};

  img {
    border-radius: 1rem;
  }
  @media screen and (max-width: 425px) {
    margin: none;
  }
`;
