import styled from '@emotion/styled';
import { backgroundColor, primaryColor } from 'commonStyles';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  background-color: ${backgroundColor};

  @media screen and (max-width: 767px) {
    width: auto;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Logo = styled.img`
  @media screen and (max-width: 767px) {
    padding: 17px 0 17px 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 17px 0 17px 32px;
  }

  @media screen and (min-width: 1024px) {
    padding: 17px 0 17px 60px;
  }
`;

export const GroupBtn = styled.div`
  @media screen and (max-width: 767px) {
    padding: 13px 16px 13px 0;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 32px 13px 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 13px 60px 13px 0;
  }
`;

export const Button = styled.button`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  border: none;
  border-radius: 80px;
  width: 100px;
  height: 34px;
  :not(:last-child) {
    margin-right: 10px;
  }
  background-color: ${primaryColor};
`;
