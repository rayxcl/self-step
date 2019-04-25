import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  background: #E9ECEF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const SubContainer = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;

`
const LogoContainer = styled.div`
  display: block;
  padding-bottom: 2rem;
  text-align: center;
  font-weight: 800;
  letter-spacing: 2px;
`

const AuthTemplate = ({ children }) => {
  console.log(children)
  return (
    <>
      <Container>
        <SubContainer>
          <LogoContainer>
            <Link to="/">
              REACTERS
            </Link>
          </LogoContainer>
          {children}
        </SubContainer>
      </Container>
    </>
  );
};

export default AuthTemplate;