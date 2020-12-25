import React, { memo } from 'react'

import TopBanner from './c-cpns/topbanner'
import  HotRecommend from "./c-cpns/hot-recommend"
import  NewAlbum from "./c-cpns/new-album"
import RecommendRanking  from "./c-cpns/recommend-ranking"
import  UserLogin from "./c-cpns/user-login"
import  SettleSinger from "./c-cpns/settle-singer"
import  HotAnchor from "./c-cpns/hot-anchor"

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'


export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      {/* 上方轮播图 */}
      <TopBanner/>
      {/* 下方主体内容 */}
      <Content className="wrap-980">
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin/>
          <SettleSinger/>
          <HotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
