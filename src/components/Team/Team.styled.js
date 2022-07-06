import styled from '@emotion/styled';
import { backgroundColor } from 'commonStyles';

export const TeamContainer = styled.div`
  max-width: 2056px;
  text-align: center;
  margin-bottom: 140px;

  @media screen and (max-width: 767px) {
    padding: 0 16px 0px 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 32px 0px 32px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 60px 0px 60px;
  }
`;

export const H2 = styled.h2`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 1em;
  margin-bottom: 50px;
`;

export const CardList = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  background-color: ${backgroundColor};
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    margin: 8px;
    width: calc((100% - 4 * 8px) / 2);
  }

  @media screen and (min-width: 1024px) {
    margin: 15px;
    width: calc((100% - 6 * 15px) / 3);
  }
`;
export const Thumb = styled.div`
  padding: 20px;
`;

export const IMG = styled.img`
  width: 70px;
  height: 70px;
`;

export const TextTeam = styled.p`
  text-align: center;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62em;
  :not(:last-child) {
    padding-bottom: 20px;
  }
`;
