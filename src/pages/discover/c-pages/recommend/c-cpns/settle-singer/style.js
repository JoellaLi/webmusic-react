import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  padding: 15px 20px 30px;
  .title {
    span {
      font-weight: 700;
    }
    a {
      font-weight: 400;
    }
  }
  .list {
    margin: 6px 0 14px 0;
    .list-item {
      display: flex;
      justify-content: flex-start;
      width: 210px;
      height: 62px;
      margin-top: 14px;
      background-color: #fafafa;
      &:hover {
        background-color: #eee;
      }
      img {
        width: 62px;
        height: 62px;
      }
      .info {
        width: 148px;
        height: 62px;
        padding-left: 14px;
        border: 1px solid #e9e9e9;
        border-left: none;
        .name {
          margin-top: 8px;
          color: #333;
          font-size: 14px;
        }
        .detail {
          margin-top: 8px;
          color: #666;
          font-size: 12px;
        }
      }
      &:hover {
        text-decoration: none;
      }
    }
  }
  /* 滑动门背景样式 可根据文字长度调节*/
  .btn {
    display: flex;
    justify-content: center;
    .right {
      display: inline-block;
      height: 31px;
      padding-right: 5px;
      border-radius: 4px;
      background-position: right -100px;
      .left {
        display: inline-block;
        height: 31px;
        padding: 0 45px 0 50px;
        line-height: 31px;
        text-align: center;
        color: #333;
        font-weight: 700;
        background-position: 0 -59px;
      }
    }
    &:hover {
      .right {
        background-position: right -181px;
        .left {
          background-position: 0 -140px;
        }
      }
    }
  }

`