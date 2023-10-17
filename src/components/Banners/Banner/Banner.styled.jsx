import styled from '@emotion/styled';

export const WrapperBanner = styled.div`
  position: relative;
  span {
    img {
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 17%,
        rgba(0, 0, 0, 0.6671262254901961) 78%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
`;
export const WrapperInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(20%, 15%);
  @media screen and (max-width: 425px) {
    position: relative;
    transform: none;
  }
`;
