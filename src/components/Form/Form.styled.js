import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

export const FromContainer = styled.div`
  width: 360px;
  margin-bottom: 100px;
  text-align: center;
`;

export const FormField = styled.div`
  padding: 0 16px 0 16px;
`;

export const Radio = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Input = styled(TextField)`
  width: 328px;
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
  width: 83px;
`;
