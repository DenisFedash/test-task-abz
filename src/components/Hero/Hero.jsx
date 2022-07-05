import { Button } from 'components/Header/Header.styled';
import { ContainerHero, Text, Title } from './Hero.styled';

export const Hero = () => {
  return (
    <ContainerHero>
      <Title>Test assignment for front-end developer</Title>
      <Text>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </Text>
      <Button>Sigh up</Button>
    </ContainerHero>
  );
};
