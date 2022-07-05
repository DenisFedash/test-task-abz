import styled from '@emotion/styled';
import { backgroundColor, primaryColor } from 'commonStyles';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  background-color: ${backgroundColor};
`;

export const Logo = styled.img`
  padding: 17px 0 17px 16px;
`;

export const GroupBtn = styled.div`
  padding: 13px 16px 13px 0;
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
