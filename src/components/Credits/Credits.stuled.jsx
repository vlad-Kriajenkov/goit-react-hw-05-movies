import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: -150px;
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc((100% -30px) / 6);

  padding: 10px;
  margin: 10px;

  border-radius: 10px;
  background-color: rgb(192 192 192);
  color: #000000;
`;
