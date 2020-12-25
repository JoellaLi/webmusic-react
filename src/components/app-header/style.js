import styled from 'styled-components'
import hot from '@/assets/img/sprite-01.png'



export const HeaderWrapper = styled.div`
  height: 75px;
  background: #242424;
  .top-content {
    display: flex;
    justify-content: space-between;
    height: 70px;
  }
  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`
export const HeaderLeft = styled.div`
  /* background-color: skyblue; */
  display: flex;
  h1>.logo {
    display: block;
    width: 176px;
    height: 69px;
    text-indent: -9999px;
    background-position: 0 0;

  }
  .Nav-list {
    display: flex;
    line-height: 70px;
    font-size: 14px;
    }
    li.Nav-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position:absolute;
          content:"";
          width: 28px;
          height: 19px;
          background-image: url(${hot});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active {
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }
    
      .active .icon {
        position: absolute;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        background-position: -226px 0;
      }
    }
  }

`

export const HeaderRight = styled.div`
  /* background-color: orange; */
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    .icon {
      color: #666;
    }
    input {
      outline: none;
      font-size: 12px;
      &::placeholder {
      font-size: 12px;
    }
    }
  }

  .ant-input-affix-wrapper, .ant-input-affix-wrapper-focused {
    border: none;
    box-shadow: none;
}
  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
  .login {
    color: #787878;
    cursor: pointer;
    &:hover {
      color: #666;
      text-decoration: underline;
    }
  }

`