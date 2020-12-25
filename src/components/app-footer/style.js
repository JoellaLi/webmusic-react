import styled from 'styled-components'
import police from '@/assets/img/police.png'

export const FooterWrapper = styled.div`
  height: 172px;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  div {
    display: flex;
    justify-content: space-between;
  }
`
export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    li {
      a, span {
        color: #999;
        &:hover {
          color: #999;
        }
      }
      span {
      margin: 0 8px 0 10px;
      color: #c2c2c2;
    } 
    }
  }
  p {
    color: #666;
    margin-bottom: 0;
    a{
      &:hover {
        color: #666;
      }
    }
    .sep {
      margin-right: 14px;
    }
    .police {
      display: inline-block;
      width: 14px;
      height: 14px;
      background-image:url(${police});
      background-size: cover;
      margin-right: 2px;
      vertical-align: -2px;
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;
  align-items: center;
  margin: 33px 0 0;
  li {
    width: 60px;
    height: 70px;
    &:nth-child(n+2) {
      margin-left: 30px;
    }
    .logo {
      display: block;
      width: 50px;
      height: 45px;
      margin: 0 5px;
      overflow: hidden;
      text-indent: -9999px;
      color: transparent;
    }
    :nth-child(1) .logo{
      background-position: -63px -456.5px;
    }
    :nth-child(2) .logo{
      background-position: -63px -101px;
    }
    :nth-child(3) .logo{
      background-position: 0 0;
    }
    :nth-child(4) .logo{
      background-position: -60px -50px;
    }
    .info {
      display: inline-block;
      margin: 5px 5px 0;
      width: 52px;
      height: 14px;
    }
    :nth-child(1) .info {
      background-position: 0 -108px;
      margin-left: -6px;
      width: 72px;
    }
    :nth-child(2) .info {
      background-position: -1px -91px;
    }
    :nth-child(3) .info {
      background-position: 0 0;
    }
    :nth-child(4) .info {
      background-position: 0 -54px;
    }
  }
`
