import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotRecommendBothAction } from "../../store/actionCreator"

import { HotRecommendWrapper } from './style'
import TitlebarRcmd from '@/components/titlebar-rcmd'
import SongCover from '@/components/song-cover'

export default memo(function HotRecommendDJ() {
  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(["recommend","hotRecommend"])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendBothAction(5))
  }, [dispatch])

  // console.log(hotRecommend)

  // 「热门推荐」展示八条信息 其中五条「推荐歌单」 三条「推荐电台」（4 6 8th）
  return (
    <HotRecommendWrapper>
      <TitlebarRcmd title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} more="/discover/playlist"/>
      <ul className="hrlist">
        {
          hotRecommend.map((item, index) => {
            return (
              <li key={item.id}>
                <SongCover item={item} isDJ={index===3||index===5||index===7} isAuthor={false}/>
              </li>
            )
          })
        }
      </ul>
    </HotRecommendWrapper>
  )
})


