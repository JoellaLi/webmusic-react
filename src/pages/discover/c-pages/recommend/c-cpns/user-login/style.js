import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  width: 100%;
  height: 126px;
  background-position: 0 0;

  .text {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
    font-size: 12px;
  }

  .login {
    display: block;
    width: 100px;
    height: 31px;
    background-position: 0 -195px;
    margin: 0 auto;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    &:hover {
      text-decoration: none;
      background-position: -110px -195px;
    }
  }
`