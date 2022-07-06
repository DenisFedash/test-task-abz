import { Button } from 'components/Header/Header.styled';
import {
  Card,
  CardList,
  H2,
  IMG,
  TeamContainer,
  TextTeam,
  Thumb,
} from './Team.styled';

import ava from '../../img/ava.jpg';

export const Team = () => {
  return (
    <TeamContainer>
      <H2>Working with GET request</H2>
      <CardList>
        <Card>
          <Thumb>
            <IMG src={ava} alt="avatar" />
            <TextTeam>Salvador Stewart Flynn Thomas Salva...</TextTeam>
            <TextTeam>
              Frontend Developer Frontend ... frontend_develop@gmail.com +38
              (098) 278 44 24
            </TextTeam>
          </Thumb>
        </Card>
        <Card>
          <Thumb>
            <IMG src={ava} alt="avatar" />
            <TextTeam>Salvador Stewart Flynn Thomas Salva...</TextTeam>
            <TextTeam>
              Frontend Developer Frontend ... frontend_develop@gmail.com +38
              (098) 278 44 24
            </TextTeam>
          </Thumb>
        </Card>
        <Card>
          <Thumb>
            <IMG src={ava} alt="avatar" />
            <TextTeam>Salvador Stewart Flynn Thomas Salva...</TextTeam>
            <TextTeam>
              Frontend Developer Frontend ... frontend_develop@gmail.com +38
              (098) 278 44 24
            </TextTeam>
          </Thumb>
        </Card>
      </CardList>
      <Button>Show more</Button>
    </TeamContainer>
  );
};
