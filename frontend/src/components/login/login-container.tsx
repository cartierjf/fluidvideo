import { Link } from '@mui/material';
import { Column } from 'components/base/column.component';
import { LoginForm } from 'components/login/login-form';
import React from 'react';
import styled from 'styled-components';

export const LoginContainer: React.FunctionComponent = () => {
  return (
    <StyledColumn>
      <StyledForm />
      <PaddedLink href="/register" underline="always">
        {"Don't have an account, register here"}
      </PaddedLink>
    </StyledColumn>
  );
};

const StyledColumn = styled(Column)`
  border: black 2px;
  border-radius: 15px;
  margin: 10px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const StyledForm = styled(LoginForm)`
  height: 500px;
`;

const PaddedLink = styled(Link)`
  padding-top: 20px;
`;
