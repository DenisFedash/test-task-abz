import { Card, IMG, TextTeam, Thumb } from './Team.styled';

export const UserCard = ({ id, name, email, phone, position, photo }) => {
  return (
    <Card>
      <Thumb>
        <IMG src={photo} alt="avatar" />
        <TextTeam>{name}</TextTeam>
        <TextTeam>{position}</TextTeam>
        <TextTeam>{email}</TextTeam>
        <TextTeam>{phone}</TextTeam>
      </Thumb>
    </Card>
  );
};
