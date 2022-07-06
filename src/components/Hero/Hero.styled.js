import styled from '@emotion/styled';
import { primaryTextColor } from '../../commonStyles';
import background from '../../img/img.jpeg';

export const ContainerHero = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 2056px;
  text-align: center;
  padding-bottom: 71px;
  margin-bottom: 140px;
  @media screen and (min-width: 768px) {
    padding-bottom: 88px;
  }
  @media screen and (min-width: 1024px) {
    padding-bottom: 163px;
  }
`;

export const Title = styled.h1`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 1em;
  color: ${primaryTextColor};

  @media screen and (max-width: 767px) {
    padding: 40px 16px 21px 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 89px 194px 21px 194px;
  }
  @media screen and (min-width: 1024px) {
    padding: 164px 322px 21px 322px;
  }
`;

export const Text = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62em;
  color: ${primaryTextColor};
  @media screen and (max-width: 767px) {
    padding: 0 16px 32px 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 194px 32px 194px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0px 322px 32px 322px;
  }
`;
