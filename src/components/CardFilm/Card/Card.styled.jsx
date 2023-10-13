import styled from '@emotion/styled';

export const CardBackGraund = styled.div`
  background-color: #ffffff18;
  border: 1px solid #ffffff12;
  box-shadow: 2px 2px 5px 0px #ffffff41;
  margin: 10px;
  width: ${props => props.width};

  @media screen and (max-width: 425px) {
    margin: none;
  }
`;
