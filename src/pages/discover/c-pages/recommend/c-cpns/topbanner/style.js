import styled from 'styled-components'
import download from '@/assets/img/download.png'
import controlLeft from '@/assets/img/banner-control-left.png'
import controlRight from '@/assets/img/banner-control-right.png'
import bannerDot from '@/assets/img/banner_sprite.png'

export const BannerWrapper = styled.div`
  background-color: pink;
  position: relative;
  background: url(${props=>props.bgImg}) center center/6000px;
  .banner {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 982px;
    height: 285px;
    /* background-color: pink; */
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  height: 284px;
  img {
    width: 730px;
    height: 284px;
  }
  .slick-dots {
    li {
      width: 20px;
      height: 20px;
      button {
      width: 20px;
      height: 20px;
      background: url(${bannerDot}) 0 -343px;
      transition: all 0s;
      }
    }
    li.slick-active {
      width: 20px;
      height: 20px;
      button {
      width: 20px;
      height: 20px;
      background: url(${bannerDot}) -16px -343px;
      }
    }
    
    
  }
`
export const BannerRight = styled.div`
  position: relative;
  width: 254px;
  height: 285px;
  background: url(${download});
  .download {
    text-indent: -9999px;
    overflow: hidden;
    position: absolute;
    left: 19px;
    top: 185px;
    z-index: 20;
    display: block;
    width: 215px;
    height: 56px;
    background: url(${download}) no-repeat 0 9999px;
  }
  .download:hover {
      background-position: 0 -289px;
    }
  p {
    position: absolute;
    bottom: 2px;
    width: 100%;
    text-align: center;
    margin: 10px auto;
    font-size: 12px;
    color: #8d8d8d;
  }
`
export const BannerControl = styled.div`
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    top: 50%;
    transform: translateY(-50%) translateX(100%);
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }
  .left {
    background: url(${controlLeft}) no-repeat;
    left: -111px;
    
  }
  .right {
    background: url(${controlRight}) no-repeat;
    left: 100%;
  }
`