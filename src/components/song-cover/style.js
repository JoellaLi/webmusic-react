import styled from 'styled-components'

export const SongCoverWrapper = styled.div`
  width: 182px;
  height: 234px;
  padding:  0 0 30px 42px;
  line-height: 1.4;
  .cover {
    position: relative;
    width: 140px;
    .acover {
      text-indent: -999px;
      overflow: hidden;
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-position: 0px 0px;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left:0;
      bottom: 0;
      width: 100%;
      height: 27px;
      background-position: 0 -537px;
      padding: 0 10px;
      color: #ccc;
      .left {
        color: #ccc;
        font-size: 12px;
        .earphone {
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
          margin: 9px 5px 9px 0;
          cursor: pointer;
        }
        .text {
          line-height: 12px;
          position: absolute;
          bottom: 5px;
        }
      }
      .right {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
        margin-top: 5px;
        &:hover {
          background-position: 0 -60px;
        }
      }
    }
  }
  .info {
    width: 100%;
    margin: 8px 0 3px;
    font-size: 14px;
    .title, .title:hover {
      width: 100%;
      text-overflow: ellipsis; 
      overflow: hidden;
      color: #000;
      div.ant-typography, .ant-typography p {
        margin-bottom: 0;
        .djicon {
          display: inline-block;
          width: 35px;
          height: 15px;
          margin: -1px 4px 0 0;
          background-position: -31px -658px;
          vertical-align: middle;
        }
      }
    }
    .by {
      color: #999;
      font-size: 12px;
    }
    .author, .author:hover {
      color: #666;
      font-size: 12px;
    }
  }
`