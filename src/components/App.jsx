import { Form } from './Form/Form';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Team } from './Team/Team';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Team />
      <Form />
    </div>
  );
};
