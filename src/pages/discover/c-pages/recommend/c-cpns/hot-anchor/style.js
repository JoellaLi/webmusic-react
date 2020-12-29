import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  padding: 15px 20px 30px;
  .title {
    span {
      font-weight: 700;
    }
  }
  .list {
    width: 210px;
    height: 50px;
    padding-top: 20px;
    .list-item {
      width: 210px;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      img {
        width: 40px;
        height: 40px;
      }
      .info {
        margin-left: 10px;
        width: 160px;
        .name {
          width: 100%;
        }
        .detail {
          width: 100%;
          color: #666;
        }
        }
      &:hover{
          text-decoration: none;
      }
      &:hover .detail {
          color: #666;
      }
    }
  }
`