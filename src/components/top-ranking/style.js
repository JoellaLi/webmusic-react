import styled from 'styled-components';

export const TopRankingWrapper = styled.dl`
  flex: 1;
  .header {
    height: 100px;
    display: flex;
    margin: 20px 0 0 20px;
    .image {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .info {
      margin: 5px 0 0 10px;

      a {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }
      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
        &:hover {
        background-position: -267px -235px;
      }
      }

      .favor {
        background-position: -300px -205px;
        &:hover {
        background-position: -300px -235px;
      }
      }
    }
  }
  .list {
    .list-item {
      display: flex;
      align-items: center;
      height: 32px;
      .rank {
        width: 35px;
        margin-left: 10px;
        text-align: center;
        font-size: 16px; 
        color: #666;
      }
      :nth-child(-n+3) .rank {
        color: #c10d0c;
      }
      
      .info {
        display: flex;
        justify-content: space-between;
        width: 170px;
        height: 17px;
        line-height: 17px;
        cursor: pointer;
        .name {
          color: #000;
        }
        .operate {
          display: none;
          white-space: nowrap;
          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
          }
          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
        &:hover .operate {
          display: inline-block;
        }
        &:hover .name{
          text-decoration: underline;
          color: #000;
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 32px;
    padding-right: 32px;
    a {
      color: #000;
    }
  }
`