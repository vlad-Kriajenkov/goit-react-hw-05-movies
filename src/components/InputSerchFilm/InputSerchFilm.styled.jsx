const { default: styled } = require('@emotion/styled');

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  width: 15rem;
  input {
    font-size: 0.7rem;
  }
  button {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 425px) {
    width: 20rem;
    input {
      font-size: 1rem;
    }
  }
`;
