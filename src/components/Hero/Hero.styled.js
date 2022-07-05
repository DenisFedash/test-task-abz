import styled from '@emotion/styled';
import { primaryTextColor } from '../../commonStyles';
import background from '../../img/hero-mob.jpg';

export const ContainerHero = styled.div`
  background-image: url(${background});
  width: 360px;
  text-align: center;
  padding-bottom: 71px;
  margin-bottom: 140px;
`;

export const Title = styled.h1`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 1em;
  color: ${primaryTextColor};
  padding: 40px 16px 21px 16px;
`;

export const Text = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62em;
  color: ${primaryTextColor};
  padding: 0 16px 32px 16px;
`;
