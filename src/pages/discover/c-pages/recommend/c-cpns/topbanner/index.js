import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual} from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreator'

import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { NavLink } from 'react-router-dom'

export default memo(function TopBanner() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const { topBanners } = useSelector(state => ({
    // topBanners: state.recommend.topBanners
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  // topBanners是网络请求到的res.banners数组

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerRef = useRef()

  
  // 函数用useCallback包裹进行性能优化，避免不必要渲染 
  const changeIndex = useCallback(
    (from, to) => {
      setCurrentIndex(to)
    },
    [])
    
    // <BannerWrapper>背景图切换
    const bgImg = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");

  return (
    <BannerWrapper bgImg={bgImg}>
      <div className="banner wrap-980">
        <BannerLeft>
          <Carousel autoplay effect="fade" ref={bannerRef} beforeChange={changeIndex} autoplaySpeed={5000}>
            {
              topBanners.map((item, index) => {
                return (
                  <div key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <NavLink to="/download" className="download">下载客户端</NavLink>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={() => bannerRef.current.prev()}></button>          
          <button className="btn right" onClick={() => bannerRef.current.next()}></button>          
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
