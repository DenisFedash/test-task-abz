import { Button } from 'components/Header/Header.styled';
import { Card, H2, IMG, TeamContainer, TextTeam, Thumb } from './Team.styled';

import ava from '../../img/ava.jpg';

export const Team = () => {
  return (
    <TeamContainer>
      <H2>Working with GET request</H2>
      <Card>
        <Thumb>
          <IMG src={ava} alt="avatar" />
          <TextTeam>Salvador Stewart Flynn Thomas Salva...</TextTeam>
          <TextTeam>
            Leading specialist of the department o...
            JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24
          </TextTeam>
        </Thumb>
      </Card>
      <Button>Show more</Button>
    </TeamContainer>
  );
};
