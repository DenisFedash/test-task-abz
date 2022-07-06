import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

export const FromContainer = styled.div`
  max-width: 2056px;
  margin-bottom: 100px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
  }
`;

export const FormField = styled.div`
  margin: 0 16px 0 16px;

  @media screen and (min-width: 768px) {
    margin: 0 162px 0 162px;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 262px 0 262px;
  }
`;

export const RadioForm = styled(RadioGroup)`
  /* margin: 0 0 0 162px; */
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(TextField)`
  max-width: 767px;

  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const RadioTitle = styled.p`
  text-align: left;
  margin-bottom: 7px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62em;
`;

export const RadioBtn = styled(FormControlLabel)`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62em;

  margin-bottom: 7px;
`;

export const UploadForm = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const UploadBtn = styled.button`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  margin-right: -2px;
  padding-right: 15px;
  padding-left: 15px;
  width: 83px;

  font-family: 'Nunito';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62em;
`;
