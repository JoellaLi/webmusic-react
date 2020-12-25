import styled from 'styled-components'
import copyright from '@/assets/img/white-r-icon@3x.png'

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
  }
`

export const TopMenu = styled.ul`
  padding-left: 180px;
  display: flex;
  .nav-item {
    height: 20px;
    margin: 3px 17px 0;
    a {
      display: inline-block;
      line-height: 20px;
      padding: 0 13px;
      color: #fff;
      text-decoration: none;
    }
    &:hover a, a.active {
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px;
      }
  }
  & :nth-child(3) {
    position: relative;
    ::after {
      position: absolute;
      top: 2px;
      left: 38px;
      content: "";
      width: 8px;
      height: 8px;
      background: url(${copyright}) no-repeat;
      background-size: cover;
    }
  }
`

