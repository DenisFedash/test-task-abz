import { Button, ContainerHeader, GroupBtn, Logo } from './Header.styled';
import svg from '../../img/Logo.svg';

export const Header = () => {
  return (
    <ContainerHeader>
      <Logo src={svg} alt="icon" />
      <GroupBtn>
        <Button type="button">Users</Button>
        <Button type="button">Sign up</Button>
      </GroupBtn>
    </ContainerHeader>
  );
};
