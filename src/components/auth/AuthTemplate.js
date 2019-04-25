import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  background: #000;
`


const AuthTemplate = ({ children }) => {
  return (
    <div className="AuthTemplate">
      <div className="whitebox">
        <div className="logo-area">
          <Link to="/" className="logo">
            REACTERS
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;