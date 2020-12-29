import styled from 'styled-components'

export const TitlebarRcmdWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  /* background-color: pink; */
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
  .left {
    display: flex;
    .title {
      font-size: 20px;
      line-height: 28px;
      color: #333;
      &:hover {
      text-decoration: none;
    }
    }
    .tab {
      display: flex;
      margin: 7px 0 0 20px;
      .item {
        .s_fc3 {
        &:hover {
          color: #666;
        }

        }
        .line {
          margin: 0 10px;
          color: #ccc;
        }
      }
    }

  }
  .right {
    .more {
      &:hover {
          color: #666;
        }
    }
    i {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
  }
`