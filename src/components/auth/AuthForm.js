import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

`

const Footer = styled.div`
  text-align: right;

  a {
    font-weight: 600;
    text-decoration: underline;
    color: #878E96;

    &:hover {
      color: gray
    }
  }

`

const AuthForm = () => {
  return (
    <div>
      <h3>로그인</h3>
      <form>
        <input type="text" name="username" placeholder="아이디" />
        <input type="password" name="password" placehoder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </div>
  );
};

export default AuthForm;