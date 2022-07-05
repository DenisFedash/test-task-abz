import { Button } from 'components/Header/Header.styled';
import { H2 } from 'components/Team/Team.styled';
import {
  FormField,
  FromContainer,
  Input,
  RadioBtn,
  RadioTitle,
  UploadBtn,
  UploadForm,
} from './Form.styled';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export const Form = () => {
  return (
    <FromContainer>
      <H2>Working with POST request</H2>
      <FormField>
        <Input id="outlined-required" label="Your name" />

        <Input id="outlined-read-only-input" label="Email" />

        <Input
          style={{ marginBottom: '43px' }}
          id="outlined-helperText"
          label="Phone"
          helperText="+38 (XXX) XXX - XX - XX"
        />
        <RadioTitle>Select your position</RadioTitle>
        <RadioGroup
          defaultValue="frontend developer"
          name="radio-buttons-group"
        >
          <RadioBtn
            value="frontend developer"
            control={<Radio />}
            label="Frontend developer"
          />
          <RadioBtn
            value="backend developer"
            control={<Radio />}
            label="Backend developer"
          />
          <RadioBtn value="designer" control={<Radio />} label="Designer" />
          <RadioBtn
            style={{ marginBottom: '43px' }}
            value="qa"
            control={<Radio />}
            label="QA"
          />
        </RadioGroup>
        <UploadForm>
          <UploadBtn>Upload</UploadBtn>
          <Input id="outlined-required" label="Upload your photo" />
        </UploadForm>
      </FormField>

      <Button>Sign up</Button>
    </FromContainer>
  );
};
