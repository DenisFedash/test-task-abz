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
import { fetchUsers } from 'services/fetchAPI';
import { useEffect, useState } from 'react';
import { UserList } from './UserList';

export const Team = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      const usersArray = [];
      users.map(({ id, name, email, phone, position, photo }) => {
        const user = {
          id,
          name,
          email,
          phone,
          position,
          photo,
        };
        return usersArray.push(user);
      });
      setUsers(usersArray);
    });
  }, []);

  return (
    <TeamContainer>
      <H2>Working with GET request</H2>
      {users && <UserList users={users} />}
      {/* <CardList>
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
      </CardList> */}
      <Button>Show more</Button>
    </TeamContainer>
  );
};
