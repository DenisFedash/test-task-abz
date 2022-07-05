import styled from '@emotion/styled';
import { backgroundColor } from 'commonStyles';

export const TeamContainer = styled.div`
  width: 360px;
  text-align: center;
  margin-bottom: 140px;
`;

export const H2 = styled.h2`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 1em;
  padding: 0 16px 50px 16px;
`;

export const Card = styled.div`
  background-color: ${backgroundColor};
  margin: 0 16px 0 16px;
  border-radius: 10px;
  margin-bottom: 50px;
`;
export const Thumb = styled.div`
  padding: 15px;
`;

export const IMG = styled.img`
  padding: 20px 0 20px 0;
  width: 70px;
  height: 70px;
`;

export const TextTeam = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62em;
  :not(:last-child) {
    padding-bottom: 20px;
  }
`;
