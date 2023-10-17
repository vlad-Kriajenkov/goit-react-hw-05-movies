import styled from '@emotion/styled';

export const CardBackGraund = styled.div`
  background-color: #ffffff18;
  border: 0.063rem solid #ffffff12;
  border-radius: 1rem;

  margin: 0.5rem;
  width: ${props => props.width};
  
  img {
    border-radius: 1rem;
  }
  @media screen and (max-width: 425px) {
    margin: none;
  }
`;
