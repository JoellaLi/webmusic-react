import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  width: ${props=>props.width + "px"};
    .album-image {
      position: relative;
      width: ${props => props.width + "px"};
      height: ${props => props.size + "px"};
      overflow: hidden;
      margin-top: 15px;
      img {
        width: ${props => props.size + "px"};
        height: ${props => props.size + "px"};
      }
      .cover {
        position: absolute;
        background-position: 0 ${props => props.bgp};
      }
    }

    .album-info {
      font-size: 12px;
      width: ${props => props.size};
      .name {
        color: #000;
      }

      .artist {
        color: #666;
      }
    }
`