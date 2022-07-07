import { CardList } from './Team.styled';
import { UserCard } from './UserCard';

export const UserList = ({ users }) => {
  return (
    <CardList>
      {users.map(({ id, name, email, phone, position, photo }) => (
        <UserCard
          key={id}
          id={id}
          name={name}
          email={email}
          phone={phone}
          position={position}
          photo={photo}
        />
      ))}
    </CardList>
  );
};
